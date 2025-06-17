export const android16filesforpixels: Record<string, string[]> = {
    "tegu": [
    ],
    "comet": [
    ],
    "komodo": [
    ],
    "caiman": [
    ],
    "tokay": [
    ],
    "akita": [
        'vendor/firmware/bcmdhd_clm.blob_4383_a', // WiFi firmware
        'vendor/firmware/bcmdhd_clm.blob_MMW', // WiFi firmware
        'vendor/firmware/bcmdhd_clm.blob_NA',  // WiFi firmware // TODO: This is part of the WiFi firmware but is _only_ on 16, so we need to get adevtool to ship this also
        'vendor/firmware/brcm/BCM.hcd', // Bluetooth firmware
        'vendor/firmware/brcm/BTFW_B.hcd', // Bluetooth firmware
        'vendor/firmware/fw_bcmdhd.bin', // WiFi firmware
        'vendor/firmware/fw_bcmdhd.bin_4383_a3', // WiFi firmware
        'vendor/firmware/fw_bcmdhd.map', // WiFi firmware
        'vendor/firmware/fw_bcmdhd.map_4383_a3', // WiFi firmware
        'vendor/firmware/google/edgetpu-rio.fw', // TPU
        'vendor/firmware/google/gxp-callisto.fw', // TPU
        'vendor/firmware/gxp_callisto_fw_core0', // TPU
        'vendor/firmware/gxp_callisto_fw_core1', // TPU
        'vendor/firmware/gxp_callisto_fw_core2', // TPU
    ],
    "husky": [
    ],
    "shiba": [
    ],
    "felix": [
    ],
    "tangorpro": [
    ],
    "lynx": [
    ],
    "cheetah": [
    ],
    "panther": [
    ],
    "bluejay": [
        'vendor/firmware/brcm/BCM.hcd', // Bluetooth firmware
        'vendor/firmware/brcm/BTFW_B.hcd', // Bluetooth firmware
        'vendor/firmware/fw_bcmdhd.bin', // WiFi firmware
        'vendor/firmware/fw_bcmdhd.map', // WiFi firmware
        'vendor/firmware/google/edgetpu-abrolhos.fw', // TPU firmware
    ],
    "raven": [
        'vendor/firmware/brcm/BCM.hcd', // Bluetooth firmware
        'vendor/firmware/brcm/BTFW_B.hcd', // Bluetooth firmware
        'vendor/firmware/fw_bcmdhd.bin', // WiFi firmware
        'vendor/firmware/fw_bcmdhd.map', // WiFi firmware
        'vendor/firmware/google/edgetpu-abrolhos.fw', // TPU firmware
    ],
    "oriole": [
        'vendor/firmware/brcm/BCM.hcd', // Bluetooth firmware
        'vendor/firmware/brcm/BTFW_B.hcd', // Bluetooth firmware
        'vendor/firmware/fw_bcmdhd.bin', // WiFi firmware
        'vendor/firmware/fw_bcmdhd.map', // WiFi firmware
        'vendor/firmware/google/edgetpu-abrolhos.fw', // TPU firmware
    ],
}
