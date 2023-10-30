export function getProperties(values, defaultProperties, target) {
    if (values.componentType === "viewer") {
        hidePropertiesIn(defaultProperties, values, [
            // "fileName",
            "fileExtension",
            "onSave",
            "onDiscard",
            "onPause",
            "durationType",
            "duration",
            "showWarningMsg",
            "warningMsgDuration",
            "warningMsgContent"
        ]);
    }
    if (values.durationType === "unlimited") {
        hidePropertiesIn(defaultProperties, values, ["duration"]);
    }
    if (!values.showWarningMsg) {
        hidePropertiesIn(defaultProperties, values, ["warningMsgDuration", "warningMsgContent"]);
    }
    return defaultProperties;
}

function hidePropertiesIn(propertyGroups, _value, keys) {
    keys.forEach(key =>
        modifyProperty((_, index, container) => container.splice(index, 1), propertyGroups, key, undefined, undefined)
    );
}

function modifyProperty(modify, propertyGroups, key, nestedPropIndex, nestedPropKey) {
    propertyGroups.forEach(propGroup => {
        if (propGroup.propertyGroups) {
            modifyProperty(modify, propGroup.propertyGroups, key, nestedPropIndex, nestedPropKey);
        }

        propGroup.properties?.forEach((prop, index, array) => {
            if (prop.key === key) {
                if (nestedPropIndex === undefined || nestedPropKey === undefined) {
                    modify(prop, index, array);
                } else if (prop.objects) {
                    modifyProperty(modify, prop.objects[nestedPropIndex].properties, nestedPropKey);
                } else if (prop.properties) {
                    modifyProperty(modify, prop.properties[nestedPropIndex], nestedPropKey);
                }
            }
        });
    });
}
