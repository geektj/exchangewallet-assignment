'use client'
import React, {FC} from 'react';
import TrendIcon from '../assets/trendsIcon.svg';
import SettingsIcon from '../assets/settingsIcon.svg';

type IconName = 'trend' | 'settings'

interface IconProps {
    name: IconName;
    className: string;
}

export const Icon: FC<IconProps> = ({name, className}) => {
    const iconMap: Record<IconName, React.ReactNode> = {
        trend: <TrendIcon className={className} />,
        settings: <SettingsIcon className={className} />
    };

    return(
        <>{iconMap[name] || null}</>
    )
}