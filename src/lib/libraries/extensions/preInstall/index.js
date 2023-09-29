const importModules = [
    import('./websockExt.mjs'),     // Network Extension
    import('./microbitMore.mjs')    // microbit More
];

/**
 * Install extensions from local module files.
 * @param {ExtensionManager} extensionManager - Current extension manager in VM.
 */
export default function (extensionManager) {
    Promise.all(importModules)
        .then(modules =>
            modules.forEach(module => {
                if (module) {
                    const {entry, blockClass} = module;
                    extensionManager.addBultinExtension(entry, blockClass);
                }
            })
        );
}
