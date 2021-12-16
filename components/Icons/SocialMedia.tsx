import React from 'react'

interface SocialMediaIconProps {
    color?: string;
}

export const FacebookSvg = (props: SocialMediaIconProps) => {
    const { color } = props;
    return (
        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 0.375C8.95575 0.375 0.375 8.95575 0.375 19.5C0.375 30.0443 8.95575 38.625 19.5 38.625C30.0443 38.625 38.625 30.0443 38.625 19.5C38.625 8.95575 30.0443 0.375 19.5 0.375ZM19.5 3.5625C28.3214 3.5625 35.4375 10.6786 35.4375 19.5C35.4414 23.3154 34.0732 27.005 31.5828 29.8954C29.0923 32.7858 25.6455 34.6844 21.8715 35.2447V24.1474H26.4105L27.1229 19.5367H21.8715V17.0185C21.8715 15.106 22.501 13.4055 24.2908 13.4055H27.1675V9.38288C26.6623 9.31434 25.5929 9.16612 23.572 9.16612C19.3518 9.16612 16.8783 11.3942 16.8783 16.4719V19.5367H12.5401V24.1474H16.8783V35.2048C13.1565 34.5922 9.77372 32.6763 7.33441 29.7994C4.89511 26.9224 3.55818 23.2719 3.5625 19.5C3.5625 10.6786 10.6786 3.5625 19.5 3.5625Z" fill={color || "#595755"} />
        </svg>
    )
}

export const InstSvg = (props: SocialMediaIconProps) => {
    const { color } = props;
    return (
        <svg width="39" height="39" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.1306 0.73225C13.0367 0.6445 13.6445 0.625 18.5 0.625C23.3555 0.625 23.9633 0.646125 25.8678 0.73225C27.7723 0.818375 29.0722 1.12225 30.2097 1.56263C31.4009 2.01275 32.4815 2.71637 33.3752 3.62637C34.2852 4.5185 34.9873 5.5975 35.4358 6.79025C35.8778 7.92775 36.18 9.22775 36.2677 11.129C36.3555 13.0384 36.375 13.6461 36.375 18.5C36.375 23.3555 36.3539 23.9632 36.2677 25.8694C36.1816 27.7706 35.8778 29.0706 35.4358 30.2081C34.9872 31.401 34.2841 32.4818 33.3752 33.3752C32.4815 34.2852 31.4009 34.9873 30.2097 35.4358C29.0722 35.8778 27.7722 36.18 25.871 36.2677C23.9632 36.3555 23.3555 36.375 18.5 36.375C13.6445 36.375 13.0367 36.3539 11.1306 36.2677C9.22937 36.1816 7.92938 35.8778 6.79187 35.4358C5.599 34.9872 4.51821 34.284 3.62475 33.3752C2.71537 32.4826 2.01164 31.4023 1.56263 30.2097C1.12225 29.0722 0.82 27.7722 0.73225 25.871C0.6445 23.9616 0.625 23.3539 0.625 18.5C0.625 13.6445 0.646125 13.0367 0.73225 11.1322C0.818375 9.22775 1.12225 7.92775 1.56263 6.79025C2.0123 5.59763 2.71657 4.51738 3.62637 3.62475C4.51857 2.71556 5.59827 2.01185 6.79025 1.56263C7.92775 1.12225 9.22775 0.82 11.129 0.73225H11.1306ZM25.7231 3.94975C23.8381 3.86363 23.2726 3.84575 18.5 3.84575C13.7274 3.84575 13.1619 3.86363 11.2769 3.94975C9.53325 4.02938 8.5875 4.32025 7.957 4.56562C7.12337 4.89062 6.527 5.27575 5.90138 5.90138C5.30832 6.47833 4.85192 7.18071 4.56562 7.957C4.32025 8.5875 4.02938 9.53325 3.94975 11.2769C3.86363 13.1619 3.84575 13.7274 3.84575 18.5C3.84575 23.2726 3.86363 23.8381 3.94975 25.7231C4.02938 27.4667 4.32025 28.4125 4.56562 29.043C4.85162 29.8181 5.30825 30.5217 5.90138 31.0986C6.47825 31.6917 7.18188 32.1484 7.957 32.4344C8.5875 32.6798 9.53325 32.9706 11.2769 33.0503C13.1619 33.1364 13.7257 33.1543 18.5 33.1543C23.2743 33.1543 23.8381 33.1364 25.7231 33.0503C27.4667 32.9706 28.4125 32.6798 29.043 32.4344C29.8766 32.1094 30.473 31.7243 31.0986 31.0986C31.6917 30.5217 32.1484 29.8181 32.4344 29.043C32.6798 28.4125 32.9706 27.4667 33.0503 25.7231C33.1364 23.8381 33.1543 23.2726 33.1543 18.5C33.1543 13.7274 33.1364 13.1619 33.0503 11.2769C32.9706 9.53325 32.6798 8.5875 32.4344 7.957C32.1094 7.12337 31.7243 6.527 31.0986 5.90138C30.5216 5.30837 29.8193 4.85197 29.043 4.56562C28.4125 4.32025 27.4667 4.02938 25.7231 3.94975ZM16.2169 24.0104C17.4919 24.5412 18.9117 24.6128 20.2338 24.213C21.5558 23.8133 22.698 22.967 23.4654 21.8186C24.2327 20.6703 24.5776 19.2912 24.4411 17.9168C24.3046 16.5424 23.6951 15.2581 22.7169 14.2831C22.0933 13.6599 21.3392 13.1827 20.509 12.8859C19.6789 12.589 18.7932 12.48 17.9158 12.5665C17.0384 12.653 16.1911 12.933 15.4349 13.3863C14.6787 13.8396 14.0325 14.455 13.5426 15.188C13.0528 15.9211 12.7316 16.7536 12.6021 17.6257C12.4726 18.4978 12.5381 19.3877 12.7939 20.2315C13.0496 21.0752 13.4893 21.8517 14.0812 22.5052C14.6731 23.1586 15.4025 23.6727 16.2169 24.0104ZM12.0033 12.0033C12.8564 11.1501 13.8693 10.4733 14.984 10.0116C16.0987 9.54986 17.2934 9.31221 18.5 9.31221C19.7066 9.31221 20.9013 9.54986 22.016 10.0116C23.1307 10.4733 24.1436 11.1501 24.9967 12.0033C25.8499 12.8564 26.5267 13.8693 26.9884 14.984C27.4501 16.0987 27.6878 17.2934 27.6878 18.5C27.6878 19.7066 27.4501 20.9013 26.9884 22.016C26.5267 23.1307 25.8499 24.1436 24.9967 24.9967C23.2737 26.7198 20.9368 27.6878 18.5 27.6878C16.0632 27.6878 13.7263 26.7198 12.0033 24.9967C10.2802 23.2737 9.31221 20.9368 9.31221 18.5C9.31221 16.0632 10.2802 13.7263 12.0033 12.0033ZM29.7255 10.6805C29.9369 10.4811 30.1062 10.2412 30.2232 9.97521C30.3403 9.70918 30.4028 9.42237 30.4071 9.13176C30.4113 8.84115 30.3572 8.55264 30.2479 8.28332C30.1386 8.01399 29.9765 7.76933 29.7709 7.56381C29.5654 7.3583 29.3208 7.19611 29.0514 7.08684C28.7821 6.97758 28.4936 6.92346 28.203 6.9277C27.9124 6.93193 27.6256 6.99444 27.3595 7.11151C27.0935 7.22858 26.8537 7.39783 26.6542 7.60925C26.2664 8.02042 26.054 8.56657 26.0623 9.13176C26.0705 9.69695 26.2987 10.2367 26.6984 10.6364C27.0981 11.0361 27.6378 11.2642 28.203 11.2725C28.7682 11.2807 29.3143 11.0684 29.7255 10.6805Z" fill={color || "#595755"} />
        </svg>
    )
}

export const ViberSvg = (props: SocialMediaIconProps) => {
    const { color } = props;
    return (
        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.5225 0.00591908C15.3928 0.0437003 8.66408 0.558013 4.90058 4.01073C2.10111 6.78461 1.12367 10.8857 1.00911 15.9569C0.914049 21.0099 0.799487 30.499 9.94621 33.0828V37.0181C9.94621 37.0181 9.88892 38.5928 10.9297 38.9157C12.2119 39.3216 12.9419 38.1101 14.1606 36.8085L16.4336 34.2382C22.6919 34.7586 27.4852 33.5593 28.0373 33.3814C29.3073 32.9755 36.4601 32.0615 37.6289 22.5711C38.8281 12.7699 37.0451 6.59448 33.8264 3.80111H33.8069C32.8355 2.90654 28.9319 0.0619816 20.2105 0.0302941C20.2105 0.0302941 19.5634 -0.0135809 18.5225 0.00470033V0.00591908ZM18.6298 2.76151C19.5183 2.75542 20.0582 2.7932 20.0582 2.7932C27.4401 2.8127 30.9635 5.03448 31.7947 5.78279C34.5052 8.10573 35.9019 13.673 34.8794 21.8557C33.908 29.7897 28.1068 30.2919 27.0331 30.6343C26.576 30.7806 22.3543 31.8214 17.0357 31.4789C17.0357 31.4789 13.0747 36.2589 11.8365 37.4898C11.6403 37.7055 11.4111 37.7689 11.2649 37.7372C11.0553 37.686 10.9919 37.4264 11.0041 37.0705L11.0419 30.5393C3.28452 28.3943 3.74155 20.3005 3.82442 16.0727C3.91949 11.8449 4.71289 8.38604 7.07483 6.04361C10.2545 3.16858 15.9681 2.78101 18.6274 2.76151H18.6298ZM19.2148 6.98814C19.151 6.98749 19.0876 6.99949 19.0284 7.02344C18.9692 7.0474 18.9154 7.08282 18.8699 7.12769C18.8245 7.17255 18.7884 7.22596 18.7637 7.28485C18.739 7.34373 18.7262 7.40691 18.7261 7.47076C18.7261 7.74376 18.9479 7.95948 19.2148 7.95948C20.4232 7.9365 21.6242 8.15298 22.7485 8.59643C23.8728 9.03988 24.8982 9.70154 25.7656 10.5432C27.5364 12.2629 28.3993 14.5736 28.4322 17.5949C28.4322 17.8618 28.6479 18.0836 28.9209 18.0836V18.0641C29.0496 18.0645 29.1732 18.0139 29.2647 17.9235C29.3563 17.8331 29.4084 17.7102 29.4096 17.5815C29.4688 16.1594 29.2382 14.7401 28.7318 13.4099C28.2254 12.0797 27.4538 10.8664 26.4639 9.84367C24.5346 7.95826 22.0898 6.98692 19.2148 6.98692V6.98814ZM12.7908 8.10573C12.4458 8.05533 12.094 8.12457 11.7938 8.30195H11.7682C11.0714 8.7104 10.4437 9.22664 9.90842 9.83148C9.46358 10.3458 9.22227 10.8662 9.15889 11.3671C9.12111 11.6657 9.14671 11.9643 9.23567 12.2495L9.26736 12.269C9.76827 13.7412 10.4227 15.1574 11.2222 16.4907C12.2521 18.3639 13.5195 20.0962 14.993 21.6448L15.0369 21.7082L15.1064 21.7594L15.1503 21.8106L15.2015 21.8545C16.7556 23.3323 18.4922 24.6056 20.369 25.6435C22.514 26.8111 23.8156 27.3632 24.5968 27.5923V27.6045C24.8259 27.674 25.0343 27.7057 25.244 27.7057C25.9097 27.6569 26.54 27.3866 27.0343 26.9379C27.6364 26.4024 28.1469 25.7721 28.5455 25.072V25.0598C28.9197 24.3553 28.793 23.6887 28.253 23.2377C27.1718 22.2926 26.0026 21.4531 24.7613 20.7308C23.9301 20.2798 23.0855 20.5528 22.7431 21.0099L22.013 21.93C21.6389 22.387 20.9588 22.3237 20.9588 22.3237L20.9393 22.3359C15.8681 21.0403 14.5153 15.9057 14.5153 15.9057C14.5153 15.9057 14.4519 15.2074 14.9211 14.8515L15.8352 14.1154C16.2727 13.7595 16.5774 12.9161 16.1082 12.0837C15.3908 10.8408 14.5532 9.67128 13.6073 8.59201C13.4005 8.33757 13.1104 8.16446 12.7883 8.10329L12.7908 8.10573ZM20.0582 9.55361C19.411 9.55361 19.411 10.531 20.0643 10.531C20.869 10.5441 21.6632 10.7156 22.4016 11.0358C23.14 11.3559 23.8081 11.8185 24.3677 12.397C24.8781 12.96 25.2704 13.6198 25.5212 14.3373C25.7719 15.0547 25.8762 15.8152 25.8277 16.5736C25.83 16.702 25.8824 16.8243 25.9737 16.9146C26.065 17.0048 26.1881 17.0556 26.3165 17.0562L26.336 17.0818C26.4653 17.0809 26.589 17.0291 26.6805 16.9376C26.7719 16.8462 26.8237 16.7224 26.8247 16.5931C26.8685 14.6565 26.2665 13.0319 25.0855 11.7303C23.8985 10.4287 22.2422 9.69864 20.1276 9.55361H20.0582ZM20.8589 12.1812C20.1922 12.1617 20.1666 13.1587 20.8272 13.1782C22.4335 13.261 23.2135 14.0727 23.3159 15.7424C23.3181 15.8692 23.3699 15.99 23.4601 16.0791C23.5503 16.1681 23.6718 16.2183 23.7985 16.219H23.818C23.8832 16.2162 23.9471 16.2004 24.0062 16.1726C24.0652 16.1448 24.1181 16.1056 24.1618 16.0571C24.2054 16.0087 24.239 15.952 24.2606 15.8905C24.2821 15.8289 24.2912 15.7637 24.2872 15.6985C24.1727 13.5219 22.9856 12.2958 20.8784 12.1825H20.8589V12.1812Z" fill={color || "#595755"} />
        </svg>
    )
}