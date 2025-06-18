export const android16filesforpixels: Record<string, string[]> = {
    "tegu": [
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
    "comet": [
        'vendor/firmware/brcm/BCM_200.hcd', // Bluetooth firmware
        'vendor/firmware/fw_bcmdhd.bin_4390_b1', // WiFi firmware
        'vendor/firmware/fw_bcmdhd.map_4390_b1', // WiFi firmware
        'vendor/firmware/google/edgetpu-rio.fw', // TPU
        'vendor/firmware/google/gxp-callisto.fw', // TPU
        'vendor/firmware/gxp_callisto_fw_core0', // TPU
        'vendor/firmware/gxp_callisto_fw_core1', // TPU
        'vendor/firmware/gxp_callisto_fw_core2', // TPU
    ],
    "komodo": [
        'vendor/firmware/brcm/BCM_200.hcd', // Bluetooth firmware
        'vendor/firmware/fw_bcmdhd.bin_4390_b1', // WiFi firmware
        'vendor/firmware/fw_bcmdhd.map_4390_b1', // WiFi firmware
        'vendor/firmware/google/edgetpu-rio.fw', // TPU
        'vendor/firmware/google/gxp-callisto.fw', // TPU
        'vendor/firmware/gxp_callisto_fw_core0', // TPU
        'vendor/firmware/gxp_callisto_fw_core1', // TPU
        'vendor/firmware/gxp_callisto_fw_core2', // TPU
    ],
    "caiman": [
        'vendor/firmware/brcm/BCM_200.hcd', // Bluetooth firmware
        'vendor/firmware/fw_bcmdhd.bin_4390_b1', // WiFi firmware
        'vendor/firmware/fw_bcmdhd.map_4390_b1', // WiFi firmware
        'vendor/firmware/google/gxp-callisto.fw', // TPU
        'vendor/firmware/gxp_callisto_fw_core0', // TPU
        'vendor/firmware/gxp_callisto_fw_core1', // TPU
        'vendor/firmware/gxp_callisto_fw_core2', // TPU
    ],
    "tokay": [
        'vendor/firmware/brcm/BCM_200.hcd', // Bluetooth firmware
        'vendor/firmware/fw_bcmdhd.bin_4390_b1', // WiFi firmware
        'vendor/firmware/fw_bcmdhd.map_4390_b1', // WiFi firmware
        'vendor/firmware/google/edgetpu-rio.fw', // TPU
        'vendor/firmware/google/gxp-callisto.fw', // TPU
        'vendor/firmware/gxp_callisto_fw_core0', // TPU
        'vendor/firmware/gxp_callisto_fw_core1', // TPU
        'vendor/firmware/gxp_callisto_fw_core2', // TPU
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
        'vendor/firmware/brcm/BCM.hcd', // Bluetooth firmware
        'vendor/firmware/brcm/BTFW_B.hcd', // Bluetooth firmware
        'vendor/firmware/fw_bcmdhd.bin_4398_d0', // WiFi firmware
        'vendor/firmware/fw_bcmdhd.map_4398_d0', // WiFi firmware
        'vendor/firmware/google/edgetpu-rio.fw', // TPU
        'vendor/firmware/google/gxp-callisto.fw', // TPU
        'vendor/firmware/gxp_callisto_fw_core0', // TPU
        'vendor/firmware/gxp_callisto_fw_core1', // TPU
        'vendor/firmware/gxp_callisto_fw_core2', // TPU
    ],
    "shiba": [
        'vendor/firmware/brcm/BCM.hcd', // Bluetooth firmware
        'vendor/firmware/brcm/BTFW_B.hcd', // Bluetooth firmware
        'vendor/firmware/fw_bcmdhd.bin_4398_d0', // WiFi firmware
        'vendor/firmware/fw_bcmdhd.map_4398_d0', // WiFi firmware
        'vendor/firmware/google/edgetpu-rio.fw', // TPU
        'vendor/firmware/google/gxp-callisto.fw', // TPU
        'vendor/firmware/gxp_callisto_fw_core0', // TPU
        'vendor/firmware/gxp_callisto_fw_core1', // TPU
        'vendor/firmware/gxp_callisto_fw_core2', // TPU
    ],
    "felix": [
        'vendor/firmware/brcm/BCM.hcd', // Bluetooth firmware
        'vendor/firmware/brcm/BTFW_D.hcd', // Bluetooth firmware // TODO: _Only_ on 16
        'vendor/firmware/fw_bcmdhd.bin', // WiFi firmware
        'vendor/firmware/fw_bcmdhd.map', // WiFi firmware
        'vendor/firmware/google/edgetpu-janeiro.fw', // TPU firmware
        'vendor/firmware/gxp_fw_core0', // TPU firmware
        'vendor/firmware/gxp_fw_core1', // TPU firmware
        'vendor/firmware/gxp_fw_core2', // TPU firmware
        'vendor/firmware/gxp_fw_core3', // TPU firmware
    ],
    "tangorpro": [ // TODO: No obvious Bluetooth in the diff. Confirm?
        'vendor/firmware/fw_bcmdhd.bin', // WiFi firmware
        'vendor/firmware/fw_bcmdhd.map', // WiFi firmware
        'vendor/firmware/google/edgetpu-janeiro.fw', // TPU firmware
        'vendor/firmware/gxp_fw_core0', // TPU firmware
        'vendor/firmware/gxp_fw_core1', // TPU firmware
        'vendor/firmware/gxp_fw_core2', // TPU firmware
        'vendor/firmware/gxp_fw_core3', // TPU firmware
    ],
    "lynx": [ // TODO: No obvious Wifi, Bluetooth in the diff. Confirm?
        'vendor/firmware/google/edgetpu-janeiro.fw', // TPU firmware
        'vendor/firmware/gxp_fw_core0', // TPU firmware
        'vendor/firmware/gxp_fw_core1', // TPU firmware
        'vendor/firmware/gxp_fw_core2', // TPU firmware
        'vendor/firmware/gxp_fw_core3', // TPU firmware
    ],
    "cheetah": [
        'vendor/firmware/brcm/BCM.hcd', // Bluetooth firmware
        'vendor/firmware/brcm/BTFW_B.hcd', // Bluetooth firmware
        'vendor/firmware/brcm/BTFW_D.hcd', // Bluetooth firmware // TODO: _Only_ on 16
        'vendor/firmware/fw_bcmdhd.bin', // WiFi firmware
        'vendor/firmware/fw_bcmdhd.map', // WiFi firmware
        'vendor/firmware/google/edgetpu-janeiro.fw', // TPU firmware
        'vendor/firmware/gxp_fw_core0', // TPU firmware?
        'vendor/firmware/gxp_fw_core1', // TPU firmware?
        'vendor/firmware/gxp_fw_core2', // TPU firmware?
        'vendor/firmware/gxp_fw_core3', // TPU firmware?
        'vendor/bin/hw/rild_exynos',
        'vendor/lib64/libril_sitril.so',
        'vendor/lib64/libril_gfeature.so', 
        'vendor/lib64/vendor.samsung_slsi.telephony.hardware.oemservice@1.0.so',
        'vendor/lib64/vendor.samsung_slsi.telephony.hardware.radioExternal@1.0.so',
        'vendor/lib64/vendor.samsung_slsi.telephony.hardware.radioExternal@1.1.so',
        'system_ext/priv-app/OemRilService/OemRilService.apk', 
        'system_ext/app/OemRilHookService/OemRilHookService.apk', 
        'system_ext/framework/google-ril.jar', 
        'system_ext/framework/oemrilhook.jar',
    ],
    "panther": [
        'vendor/firmware/brcm/BCM.hcd', // Bluetooth firmware
        'vendor/firmware/brcm/BTFW_B.hcd', // Bluetooth firmware
        'vendor/firmware/brcm/BTFW_D.hcd', // Bluetooth firmware // TODO: _Only_ on 16
        'vendor/firmware/fw_bcmdhd.bin', // WiFi firmware
        'vendor/firmware/fw_bcmdhd.map', // WiFi firmware
        'vendor/firmware/google/edgetpu-janeiro.fw', // TPU firmware
        'vendor/firmware/gxp_fw_core0', // TPU firmware?
        'vendor/firmware/gxp_fw_core1', // TPU firmware?
        'vendor/firmware/gxp_fw_core2', // TPU firmware?
        'vendor/firmware/gxp_fw_core3', // TPU firmware?
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
