import React, { useState, useEffect, useMemo } from 'react';
import { Animated, View } from 'react-native';
import { container, loader } from './styles';
export const SkeletonLayout = ({ color = '#ccc', pulseTime = 1, width = '100%', align = 'left', direction = 'column', items, }) => {
    const [opacity] = useState(new Animated.Value(0.1));
    useEffect(() => {
        Animated.loop(Animated.sequence([
            Animated.timing(opacity, {
                toValue: 0.3,
                duration: Number(`${pulseTime}000`) / 2,
                useNativeDriver: true,
            }),
            Animated.timing(opacity, {
                toValue: 0.1,
                duration: Number(`${pulseTime}000`) / 2,
                useNativeDriver: true,
            }),
        ])).start();
    }, [opacity, pulseTime]);
    function checkValue(value) {
        const regexPorcent = /^([0-9]{1,})%$/;
        const regex = /^([0-9]{1,})([a-zA-Z]{1,})$/;
        const regexNum = /^([0-9]{1,})$/;
        if (regexPorcent.test(String(value))) {
            return value;
        }
        else if (regex.test(String(value))) {
            return Number(String(value).replace(/[a-zA-Z]/g, ''));
        }
        else if (regexNum.test(String(value))) {
            return value;
        }
        return value;
    }
    const formatStylesContaoner = useMemo(() => container({
        width: checkValue(width),
        align,
        direction,
    }), [width, width, direction]);
    return (<View style={Object.assign({}, formatStylesContaoner === null || formatStylesContaoner === void 0 ? void 0 : formatStylesContaoner.container)}>
      {items.map((item, index) => {
        var _a;
        return (<Animated.View key={index} style={Object.assign({ opacity }, (_a = loader({
            color: color,
            width: item.width ? checkValue(item.width) : '100%',
            height: checkValue(item.height),
            borderRadius: item.borderRadius || 0,
            marginBottom: item.marginBottom
                ? checkValue(item.marginBottom)
                : 3,
            marginTop: item.marginTop ? checkValue(item.marginTop) : 3,
            marginLeft: item.marginLeft ? checkValue(item.marginLeft) : 0,
            marginRight: item.marginRight ? checkValue(item.marginRight) : 0,
        })) === null || _a === void 0 ? void 0 : _a.loader)}/>);
    })}
    </View>);
};
//# sourceMappingURL=index.js.map