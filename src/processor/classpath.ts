import assert from 'assert'
import { promises as fs } from 'fs'
import { BlobEntry } from '../blobs/entry'
import { SystemState } from '../config/system-state'
import { Classpath, ExportedClasspathsJars } from '../proto-ts/packages/modules/common/proto/classpaths'
import { Partition, PathResolver } from '../util/partitions'

export interface SystemServerClasspathJar {
  makefileArrayName: string
  makefileName: string
}

export async function processSystemServerClassPaths(
  blobEntries: BlobEntry[],
  pathResolver: PathResolver,
  customState: SystemState,
) {
  let presentPaths = new Set(customState.systemServerClassPaths)
  return (await loadSystemServerClassPaths2(pathResolver))
    .filter(jar => !presentPaths.has(jar.makefileName))
    .map(jar => {
      if (jar.type === Classpath.SYSTEMSERVERCLASSPATH) {
        let relPath = jar.relPath
        let foundBlob = false
        for (let entry of blobEntries) {
          if (entry.partPath.relPath === relPath && entry.partPath.partition == jar.partition) {
            entry.useRootSoongNamespace = true
            foundBlob = true
            break
          }
        }
        assert(foundBlob, jar.makefileName)
      }
      let makefileArrayName: string
      if (jar.type === Classpath.SYSTEMSERVERCLASSPATH) {
        makefileArrayName = 'PRODUCT_SYSTEM_SERVER_JARS'
      } else {
        assert(jar.type === Classpath.STANDALONE_SYSTEMSERVER_JARS)
        makefileArrayName = 'PRODUCT_STANDALONE_SYSTEM_SERVER_JARS'
      }
      return {
        makefileArrayName,
        makefileName: jar.makefileName,
      } as SystemServerClasspathJar
    })
}

export async function loadSystemServerClassPaths(pathResolver: PathResolver) {
  return (await loadSystemServerClassPaths2(pathResolver)).map(jar => jar.makefileName)
}

interface ClasspathJar {
  partition: Partition
  relPath: string
  makefileName: string
  type: Classpath
}

export async function loadSystemServerClassPaths2(pathResolver: PathResolver) {
  let filePath = pathResolver.resolve(Partition.System, 'etc/classpaths/systemserverclasspath.pb')
  let cpJars = ExportedClasspathsJars.decode(await fs.readFile(filePath))
  return cpJars.jars.map(jar => {
    assert(
      jar.classpath === Classpath.SYSTEMSERVERCLASSPATH || jar.classpath === Classpath.STANDALONE_SYSTEMSERVER_JARS,
    )
    assert(jar.minSdkVersion === '')
    assert(jar.maxSdkVersion === '')
    let jarPath = jar.path.split('/')
    assert(jarPath.length === 4)
    assert(jarPath[0] === '')
    let partition = jarPath[1]
    assert(jarPath[2] === 'framework')
    let name = jarPath[3]
    let nameSuffix = '.jar'
    assert(name.endsWith(nameSuffix))
    return {
      partition,
      relPath: jarPath.slice(2).join('/'),
      makefileName: partition + ':' + name.slice(0, -nameSuffix.length),
      type: jar.classpath,
    } as ClasspathJar
  })
}
