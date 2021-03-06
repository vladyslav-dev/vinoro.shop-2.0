import React from 'react';
import Link from 'next/link'
import styles from './SocialMedia.module.scss'
import { FacebookSvg, InstSvg, ViberSvg } from '@/icons/SocialMedia';

interface SocialMediaProps {
    color?: string;
}

const SocialMedia = ({ color }: SocialMediaProps) => (
    <div className={styles.socialMedia}>
        <Link href={process.env.NEXT_PUBLIC_FACEBOOK_LINK || "/"} >
            <a target="_blank">
                <FacebookSvg color={color} />
            </a>
        </Link>
        <Link href={process.env.NEXT_PUBLIC_INSTAGRAM_LINK|| "/"} >
            <a target="_blank">
                <InstSvg color={color} />
            </a>
        </Link>
        <Link href={process.env.NEXT_PUBLIC_VIBER_LINK || "/"} >
            <a target="_blank">
                <ViberSvg color={color} />
            </a>
        </Link>
    </div>
);

export default SocialMedia