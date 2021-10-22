import React from 'react';
import { View} from 'react-native';
import { SvgProps } from 'react-native-svg';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './style';

type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    checked?: boolean 
}

export function Category({
    title,
    icon: Icon,
    checked = false,
    ...rest
} : Props) {

    return(
        <RectButton {...rest}>
            

        </RectButton>    
    )
}