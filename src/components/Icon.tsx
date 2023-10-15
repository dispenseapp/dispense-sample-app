import React from 'react'
import styled from 'styled-components'

export type IconType =
  | 'LOGO'
  | 'CART'
  | 'SEARCH'
  | 'CLOSE_X_CIRCLED'
  | 'INFO_CIRCLED'
  | 'CHECK_MARK_CIRCLED'
  | 'CLOSE_X'
  | 'FLOWER'
  | 'VAPORIZERS'
  | 'EDIBLES'
  | 'PRE_ROLLS'
  | 'TOPICALS'

type IconArgs = {
  type: IconType
  height?: number | string
  width?: number | string
  viewBox?: string
  color?: string
}

const Svg = styled.svg<IconArgs>`
  outline: none;
`

export type IconProps = IconArgs & React.ComponentProps<typeof Svg>

const getIconByType = (type: IconType, color?: string) => {
  const fill = color ?? 'currentColor'

  switch (type) {
    case 'SEARCH':
      return (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.2379 23.3786L24.4041 25.5441L24.3767 25.5707C23.9923 25.9553 23.7763 26.4769 23.7763 27.0207C23.7763 27.5645 23.9923 28.086 24.3767 28.4706C25.4933 29.5872 27.408 31.5028 28.5254 32.6194C28.7158 32.8097 28.9418 32.9607 29.1905 33.0637C29.4392 33.1668 29.7058 33.2198 29.975 33.2198C30.2442 33.2198 30.5108 33.1668 30.7595 33.0637C31.0082 32.9607 31.2342 32.8097 31.4246 32.6194L32.6194 31.4246C33.0038 31.0401 33.2198 30.5187 33.2198 29.975C33.2198 29.4313 33.0038 28.9099 32.6194 28.5255L28.4706 24.3767C28.086 23.9923 27.5645 23.7763 27.0207 23.7763C26.4769 23.7763 25.9553 23.9923 25.5707 24.3767L25.5441 24.4041L23.3787 22.2379C24.9811 20.3412 25.7886 17.8986 25.6325 15.4205C25.4763 12.9424 24.3686 10.6205 22.5408 8.93988C20.7129 7.2593 18.3063 6.35007 15.8239 6.40214C13.3414 6.45422 10.9751 7.46359 9.21932 9.21935C7.46356 10.9751 6.45419 13.3414 6.40211 15.8239C6.35004 18.3064 7.25927 20.7129 8.93985 22.5408C10.6204 24.3686 12.9423 25.4764 15.4204 25.6325C17.8985 25.7886 20.3411 24.9811 22.2379 23.3786ZM27.3307 25.5167L31.4794 29.6654C31.5615 29.7476 31.6076 29.8589 31.6076 29.975C31.6076 30.0911 31.5615 30.2025 31.4794 30.2846L30.2846 31.4794C30.2025 31.5615 30.0911 31.6076 29.975 31.6076C29.8589 31.6076 29.7475 31.5615 29.6654 31.4794L25.5167 27.3307C25.4346 27.2486 25.3885 27.1372 25.3885 27.0211C25.3885 26.905 25.4346 26.7936 25.5167 26.7115L26.7115 25.5167C26.7936 25.4346 26.905 25.3885 27.0211 25.3885C27.1372 25.3885 27.2485 25.4346 27.3307 25.5167ZM10.3592 10.3592C11.4799 9.23852 12.9078 8.4753 14.4623 8.1661C16.0167 7.85689 17.628 8.01558 19.0923 8.62211C20.5565 9.22863 21.8081 10.2557 22.6886 11.5736C23.5692 12.8914 24.0392 14.4407 24.0392 16.0256C24.0392 17.6106 23.5692 19.1599 22.6886 20.4777C21.8081 21.7955 20.5565 22.8226 19.0923 23.4292C17.628 24.0357 16.0167 24.1944 14.4623 23.8852C12.9078 23.576 11.4799 22.8128 10.3592 21.692C8.85737 20.1887 8.01377 18.1506 8.01377 16.0256C8.01377 13.9007 8.85737 11.8626 10.3592 10.3592Z"
          fill="#181818"
        />
      )
    case 'CART':
      return (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.3619 30.1949C13.7757 30.1949 13.2027 30.3687 12.7154 30.6943C12.228 31.02 11.8482 31.4828 11.6239 32.0244C11.3995 32.5659 11.3409 33.1618 11.4552 33.7367C11.5696 34.3116 11.8518 34.8396 12.2663 35.2541C12.6808 35.6686 13.2088 35.9508 13.7837 36.0652C14.3586 36.1795 14.9545 36.1208 15.496 35.8965C16.0375 35.6722 16.5004 35.2923 16.826 34.805C17.1517 34.3176 17.3255 33.7446 17.3255 33.1585C17.3251 32.3726 17.0128 31.619 16.4571 31.0633C15.9014 30.5076 15.1478 30.1952 14.3619 30.1949ZM25.1489 30.1949C24.5627 30.1949 23.9898 30.3687 23.5024 30.6943C23.015 31.02 22.6352 31.4828 22.4109 32.0244C22.1866 32.5659 22.1279 33.1618 22.2422 33.7367C22.3566 34.3116 22.6388 34.8396 23.0533 35.2541C23.4678 35.6686 23.9958 35.9508 24.5707 36.0652C25.1456 36.1795 25.7415 36.1208 26.283 35.8965C26.8245 35.6722 27.2874 35.2924 27.613 34.805C27.9387 34.3176 28.1125 33.7446 28.1125 33.1585C28.1122 32.3726 27.7998 31.619 27.2441 31.0633C26.6884 30.5076 25.9348 30.1952 25.1489 30.1949ZM14.3619 31.8073C14.6291 31.8073 14.8903 31.8865 15.1125 32.035C15.3348 32.1835 15.5079 32.3945 15.6102 32.6414C15.7125 32.8883 15.7392 33.16 15.6871 33.4221C15.635 33.6842 15.5063 33.925 15.3173 34.1139C15.1283 34.3029 14.8876 34.4316 14.6255 34.4837C14.3634 34.5359 14.0917 34.5091 13.8448 34.4068C13.5979 34.3046 13.3869 34.1314 13.2384 33.9092C13.0899 33.687 13.0107 33.4257 13.0107 33.1585C13.0108 32.8002 13.1532 32.4566 13.4066 32.2032C13.66 31.9499 14.0036 31.8075 14.3619 31.8073ZM25.1489 31.8073C25.4161 31.8073 25.6774 31.8865 25.8996 32.035C26.1218 32.1835 26.295 32.3945 26.3972 32.6414C26.4995 32.8883 26.5263 33.16 26.4741 33.4221C26.422 33.6842 26.2933 33.925 26.1043 34.1139C25.9154 34.3029 25.6746 34.4316 25.4125 34.4837C25.1504 34.5359 24.8787 34.5091 24.6318 34.4068C24.3849 34.3046 24.1739 34.1314 24.0254 33.9092C23.8769 33.687 23.7977 33.4257 23.7977 33.1585C23.7979 32.8002 23.9403 32.4566 24.1936 32.2032C24.447 31.9499 24.7906 31.8075 25.1489 31.8073ZM7.57926 7.21239C7.57926 7.21239 8.87725 20.4721 9.37306 25.1778C9.47718 26.1684 9.94437 27.0854 10.6846 27.7519C11.4247 28.4184 12.3855 28.7872 13.3815 28.7872H27.1007C27.9577 28.787 28.7924 28.5138 29.4836 28.0071C30.1748 27.5005 30.6866 26.7868 30.9447 25.9695C32.3636 21.4758 35.4111 11.8271 35.4111 11.8271C35.4494 11.7063 35.4586 11.5781 35.4381 11.4531C35.4175 11.328 35.3677 11.2096 35.2928 11.1074C35.2179 11.0052 35.1199 10.9221 35.0068 10.8649C34.8937 10.8077 34.7687 10.778 34.642 10.7782H9.494L9.12475 6.33925C9.10772 6.13775 9.01568 5.94998 8.86685 5.81309C8.71801 5.67619 8.52322 5.60014 8.32101 5.59998H4.00616C3.79234 5.59998 3.58728 5.68492 3.43608 5.83611C3.28489 5.9873 3.19995 6.19236 3.19995 6.40618C3.19995 6.62 3.28489 6.82507 3.43608 6.97626C3.58728 7.12745 3.79234 7.21239 4.00616 7.21239H7.57926ZM33.5423 12.3906L29.4073 25.4842C29.2524 25.9746 28.9453 26.4029 28.5306 26.7069C28.1158 27.0109 27.615 27.1748 27.1007 27.1748H13.3815C12.7839 27.1749 12.2075 26.9537 11.7634 26.5538C11.3193 26.1539 11.039 25.6037 10.9766 25.0094L9.64798 12.3906H33.5423Z"
          fill="#181818"
        />
      )
    case 'CLOSE_X':
      return (
        <>
          <path
            d="M12.2028 10.0815L10.0815 12.2028L23.163 25.2843L10.0815 38.3658L12.2028 40.4871L25.2843 27.4056L38.3658 40.4871L40.4871 38.3658L27.4056 25.2843L40.4871 12.2028L38.3657 10.0815L25.2843 23.163L12.2028 10.0815Z"
            fill={fill}
          />
        </>
      )
    case 'CHECK_MARK_CIRCLED':
      return (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 41.5C34.1127 41.5 41.5 34.1127 41.5 25C41.5 15.8873 34.1127 8.5 25 8.5C15.8873 8.5 8.5 15.8873 8.5 25C8.5 34.1127 15.8873 41.5 25 41.5ZM32.8595 21.5283C33.4482 20.8326 33.3614 19.7915 32.6658 19.2029C31.9701 18.6143 30.929 18.701 30.3404 19.3967L22.5861 28.5608L19.7078 24.8189C19.1522 24.0967 18.1162 23.9615 17.3939 24.5171C16.6716 25.0728 16.5365 26.1087 17.0921 26.831L21.2171 32.1935C21.5212 32.5889 21.9879 32.8254 22.4865 32.837C22.9852 32.8486 23.4624 32.634 23.7845 32.2533L32.8595 21.5283Z"
          fill={fill}
        />
      )
    case 'CLOSE_X_CIRCLED':
      return (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 41.5C34.1127 41.5 41.5 34.1127 41.5 25C41.5 15.8873 34.1127 8.5 25 8.5C15.8873 8.5 8.5 15.8873 8.5 25C8.5 34.1127 15.8873 41.5 25 41.5ZM32.292 20.6248C33.0975 19.8194 33.0975 18.5135 32.292 17.708C31.4866 16.9026 30.1807 16.9026 29.3752 17.708L25 22.0832L20.6248 17.708C19.8193 16.9026 18.5134 16.9026 17.708 17.708C16.9025 18.5135 16.9025 19.8194 17.708 20.6248L22.0832 25.0001L17.708 29.3753C16.9025 30.1807 16.9025 31.4866 17.708 32.2921C18.5134 33.0976 19.8193 33.0976 20.6248 32.2921L25 27.9169L29.3752 32.2921C30.1807 33.0976 31.4866 33.0976 32.292 32.2921C33.0975 31.4866 33.0975 30.1807 32.292 29.3753L27.9168 25.0001L32.292 20.6248Z"
          fill={fill}
        />
      )
    case 'INFO_CIRCLED':
      return (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M41.5 25C41.5 34.1127 34.1127 41.5 25 41.5C15.8873 41.5 8.5 34.1127 8.5 25C8.5 15.8873 15.8873 8.5 25 8.5C34.1127 8.5 41.5 15.8873 41.5 25ZM27.0625 17.7812C27.0625 18.9203 26.1391 19.8438 25 19.8438C23.8609 19.8438 22.9375 18.9203 22.9375 17.7812C22.9375 16.6422 23.8609 15.7188 25 15.7188C26.1391 15.7188 27.0625 16.6422 27.0625 17.7812ZM25 22.9375C23.8609 22.9375 22.9375 23.8609 22.9375 25V33.25C22.9375 34.3891 23.8609 35.3125 25 35.3125C26.1391 35.3125 27.0625 34.3891 27.0625 33.25V25C27.0625 23.8609 26.1391 22.9375 25 22.9375Z"
          fill={fill}
        />
      )
    case 'FLOWER':
      return (
        <>
          <rect
            x="13.5483"
            y="13.5484"
            width="52.9033"
            height="52.9033"
            fill="#58CB6E"
          />
          <rect x="20.3228" width="39.3549" height="6.7742" fill="#181818" />
          <rect
            x="73.2258"
            y="20.3226"
            width="6.7742"
            height="39.3549"
            fill="#181818"
          />
          <rect
            x="59.6775"
            y="6.77429"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="66.4517"
            y="13.5484"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect y="20.3226" width="6.7742" height="39.3549" fill="#181818" />
          <rect
            x="13.5483"
            y="6.77429"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="6.77417"
            y="13.5484"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="20.3228"
            y="73.2258"
            width="39.3549"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="20.3228"
            y="66.4517"
            width="39.3549"
            height="6.7742"
            fill="#3BAA50"
          />
          <rect
            x="59.6775"
            y="66.4517"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="59.6775"
            y="59.6776"
            width="6.7742"
            height="6.7742"
            fill="#3BAA50"
          />
          <rect
            x="6.77417"
            y="20.3226"
            width="6.7742"
            height="39.3549"
            fill="#89F19D"
          />
          <rect
            x="66.4517"
            y="20.3226"
            width="6.7742"
            height="39.3549"
            fill="#3BAA50"
          />
          <rect
            x="59.6775"
            y="13.5484"
            width="6.7742"
            height="6.7742"
            fill="#3BAA50"
          />
          <rect
            x="13.5483"
            y="59.6776"
            width="6.7742"
            height="6.7742"
            fill="#89F19D"
          />
          <rect
            x="13.5483"
            y="20.3226"
            width="6.7742"
            height="6.7742"
            fill="white"
          />
          <rect
            x="20.3228"
            y="13.5484"
            width="6.7742"
            height="6.7742"
            fill="white"
          />
          <rect
            x="13.5483"
            y="13.5484"
            width="6.7742"
            height="6.7742"
            fill="#89F19D"
          />
          <rect
            x="20.3228"
            y="6.77429"
            width="39.3549"
            height="6.7742"
            fill="#89F19D"
          />
          <rect
            x="66.4517"
            y="59.6776"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="13.5483"
            y="66.4517"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="6.77417"
            y="59.6776"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="36.613"
            y="24.2743"
            width="6.7742"
            height="6.7742"
            fill="#007A4B"
          />
          <rect
            x="36.613"
            y="31.0485"
            width="6.7742"
            height="6.7742"
            fill="#007A4B"
          />
          <rect
            x="29.8389"
            y="37.8226"
            width="6.7742"
            height="6.7742"
            fill="#007A4B"
          />
          <rect
            x="29.8389"
            y="37.8226"
            width="6.7742"
            height="6.7742"
            fill="#007A4B"
          />
          <rect
            x="43.387"
            y="37.8226"
            width="6.7742"
            height="6.7742"
            fill="#007A4B"
          />
          <rect
            x="50.1611"
            y="31.0485"
            width="6.7742"
            height="6.7742"
            fill="#007A4B"
          />
          <rect
            x="23.0645"
            y="31.0485"
            width="6.7742"
            height="6.7742"
            fill="#007A4B"
          />
          <rect
            x="36.613"
            y="44.5967"
            width="6.7742"
            height="6.7742"
            fill="#007A4B"
          />
          <rect
            x="36.613"
            y="37.8226"
            width="6.7742"
            height="6.7742"
            fill="#007A4B"
          />
          <rect
            x="36.613"
            y="51.371"
            width="6.7742"
            height="6.7742"
            fill="#007A4B"
          />
          <rect
            x="29.8389"
            y="44.5967"
            width="6.7742"
            height="6.7742"
            fill="#007A4B"
          />
          <rect
            x="23.0645"
            y="44.5967"
            width="6.7742"
            height="6.7742"
            fill="#007A4B"
          />
          <rect
            x="43.387"
            y="44.5967"
            width="6.7742"
            height="6.7742"
            fill="#007A4B"
          />
          <rect
            x="50.1611"
            y="44.5967"
            width="6.7742"
            height="6.7742"
            fill="#007A4B"
          />
        </>
      )
    case 'VAPORIZERS':
      return (
        <>
          <rect
            x="13.5483"
            y="13.5484"
            width="52.9033"
            height="52.9033"
            fill="#8F7FC8"
          />
          <rect x="20.3225" width="39.3549" height="6.7742" fill="#181818" />
          <rect
            x="73.2258"
            y="20.3226"
            width="6.7742"
            height="39.3549"
            fill="#181818"
          />
          <rect
            x="59.6775"
            y="6.77429"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="66.4517"
            y="13.5484"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect y="20.3226" width="6.7742" height="39.3549" fill="#181818" />
          <rect
            x="13.5483"
            y="6.77429"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="6.77417"
            y="13.5484"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="20.3225"
            y="73.2258"
            width="39.3549"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="20.3225"
            y="66.4517"
            width="39.3549"
            height="6.7742"
            fill="#6857A7"
          />
          <rect
            x="59.6775"
            y="66.4517"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="59.6775"
            y="59.6776"
            width="6.7742"
            height="6.7742"
            fill="#6857A7"
          />
          <rect
            x="6.77417"
            y="20.3226"
            width="6.7742"
            height="39.3549"
            fill="#BCACF4"
          />
          <rect
            x="66.4517"
            y="20.3226"
            width="6.7742"
            height="39.3549"
            fill="#6857A7"
          />
          <rect
            x="59.6775"
            y="13.5484"
            width="6.7742"
            height="6.7742"
            fill="#6857A7"
          />
          <rect
            x="13.5483"
            y="59.6776"
            width="6.7742"
            height="6.7742"
            fill="#BCACF4"
          />
          <rect
            x="13.5483"
            y="20.3226"
            width="6.7742"
            height="6.7742"
            fill="white"
          />
          <rect
            x="20.3225"
            y="13.5484"
            width="6.7742"
            height="6.7742"
            fill="white"
          />
          <rect
            x="13.5483"
            y="13.5484"
            width="6.7742"
            height="6.7742"
            fill="#BCACF4"
          />
          <rect
            x="20.3225"
            y="6.77429"
            width="39.3549"
            height="6.7742"
            fill="#BCACF4"
          />
          <rect
            x="66.4517"
            y="59.6776"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="13.5483"
            y="66.4517"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="6.77417"
            y="59.6776"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="40"
            y="29.8387"
            width="6.7742"
            height="6.7742"
            fill="#34246A"
          />
          <rect
            x="36.613"
            y="23.0646"
            width="6.7742"
            height="6.7742"
            fill="#34246A"
          />
          <rect
            x="33.2258"
            y="29.8387"
            width="6.7742"
            height="6.7742"
            fill="#34246A"
          />
          <rect
            x="33.2258"
            y="36.6129"
            width="6.7742"
            height="6.7742"
            fill="#34246A"
          />
          <rect
            x="40"
            y="40.0001"
            width="6.7742"
            height="6.7742"
            fill="#34246A"
          />
          <rect
            x="40"
            y="36.6129"
            width="6.7742"
            height="6.7742"
            fill="#34246A"
          />
          <rect
            x="33.2258"
            y="43.3871"
            width="6.7742"
            height="6.7742"
            fill="#34246A"
          />
          <rect
            x="40"
            y="43.3871"
            width="6.7742"
            height="6.7742"
            fill="#34246A"
          />
          <rect
            x="33.2258"
            y="50.1613"
            width="6.7742"
            height="6.7742"
            fill="#34246A"
          />
          <rect
            x="40"
            y="50.1613"
            width="6.7742"
            height="6.7742"
            fill="#34246A"
          />
        </>
      )
    case 'EDIBLES':
      return (
        <>
          <rect
            x="13.5483"
            y="13.5484"
            width="52.9033"
            height="52.9033"
            fill="#C58854"
          />
          <rect x="20.3228" width="39.3549" height="6.7742" fill="#181818" />
          <rect
            x="73.2258"
            y="20.3226"
            width="6.7742"
            height="39.3549"
            fill="#181818"
          />
          <rect
            x="59.6775"
            y="6.77429"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="66.4517"
            y="13.5484"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect y="20.3226" width="6.7742" height="39.3549" fill="#181818" />
          <rect
            x="13.5483"
            y="6.77429"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="6.77417"
            y="13.5484"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="20.3228"
            y="73.2258"
            width="39.3549"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="20.3228"
            y="66.4517"
            width="39.3549"
            height="6.7742"
            fill="#8B572A"
          />
          <rect
            x="59.6775"
            y="66.4517"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="59.6775"
            y="59.6776"
            width="6.7742"
            height="6.7742"
            fill="#8B572A"
          />
          <rect
            x="6.77417"
            y="20.3226"
            width="6.7742"
            height="39.3549"
            fill="#EAB587"
          />
          <rect
            x="66.4517"
            y="20.3226"
            width="6.7742"
            height="39.3549"
            fill="#8B572A"
          />
          <rect
            x="59.6775"
            y="13.5484"
            width="6.7742"
            height="6.7742"
            fill="#8B572A"
          />
          <rect
            x="13.5483"
            y="59.6776"
            width="6.7742"
            height="6.7742"
            fill="#EAB587"
          />
          <rect
            x="13.5483"
            y="20.3226"
            width="6.7742"
            height="6.7742"
            fill="white"
          />
          <rect
            x="20.3228"
            y="13.5484"
            width="6.7742"
            height="6.7742"
            fill="white"
          />
          <rect
            x="13.5483"
            y="13.5484"
            width="6.7742"
            height="6.7742"
            fill="#EAB587"
          />
          <rect
            x="20.3228"
            y="6.77429"
            width="39.3549"
            height="6.7742"
            fill="#EAB587"
          />
          <rect
            x="66.4517"
            y="59.6776"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="13.5483"
            y="66.4517"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="6.77417"
            y="59.6776"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="36.613"
            y="23.0646"
            width="6.7742"
            height="6.7742"
            fill="#8B572A"
          />
          <rect
            x="43.3872"
            y="23.0646"
            width="6.7742"
            height="6.7742"
            fill="#8B572A"
          />
          <rect
            x="29.8389"
            y="23.0646"
            width="6.7742"
            height="6.7742"
            fill="#8B572A"
          />
          <rect
            x="23.0645"
            y="29.8387"
            width="6.7742"
            height="6.7742"
            fill="#8B572A"
          />
          <rect
            x="23.0645"
            y="36.6129"
            width="6.7742"
            height="6.7742"
            fill="#8B572A"
          />
          <rect
            x="23.0645"
            y="43.3871"
            width="6.7742"
            height="6.7742"
            fill="#8B572A"
          />
          <rect
            x="50.1614"
            y="29.8387"
            width="6.7742"
            height="6.7742"
            fill="#8B572A"
          />
          <rect
            x="50.1614"
            y="36.6129"
            width="6.7742"
            height="6.7742"
            fill="#8B572A"
          />
          <rect
            x="32.1775"
            y="32.0162"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="40.9678"
            y="41.2097"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="50.1614"
            y="43.3871"
            width="6.7742"
            height="6.7742"
            fill="#8B572A"
          />
          <rect
            x="29.8389"
            y="50.1613"
            width="6.7742"
            height="6.7742"
            fill="#8B572A"
          />
          <rect
            x="29.8389"
            y="50.1613"
            width="6.7742"
            height="6.7742"
            fill="#8B572A"
          />
          <rect
            x="36.613"
            y="50.1613"
            width="6.7742"
            height="6.7742"
            fill="#8B572A"
          />
          <rect
            x="43.3872"
            y="50.1613"
            width="6.7742"
            height="6.7742"
            fill="#8B572A"
          />
        </>
      )
    case 'TOPICALS':
      return (
        <>
          <rect
            x="13.5483"
            y="13.5484"
            width="52.9033"
            height="52.9033"
            fill="#43BAD2"
          />
          <rect x="20.3225" width="39.3549" height="6.7742" fill="#181818" />
          <rect
            x="73.2258"
            y="20.3226"
            width="6.7742"
            height="39.3549"
            fill="#181818"
          />
          <rect
            x="59.6775"
            y="6.77429"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="66.4517"
            y="13.5484"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect y="20.3226" width="6.7742" height="39.3549" fill="#181818" />
          <rect
            x="13.5483"
            y="6.77429"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="6.77417"
            y="13.5484"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="20.3225"
            y="73.2258"
            width="39.3549"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="20.3225"
            y="66.4517"
            width="39.3549"
            height="6.7742"
            fill="#22889C"
          />
          <rect
            x="59.6775"
            y="66.4517"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="59.6775"
            y="59.6776"
            width="6.7742"
            height="6.7742"
            fill="#22889C"
          />
          <rect
            x="6.77417"
            y="20.3226"
            width="6.7742"
            height="39.3549"
            fill="#A8F0FF"
          />
          <rect
            x="66.4517"
            y="20.3226"
            width="6.7742"
            height="39.3549"
            fill="#22889C"
          />
          <rect
            x="59.6775"
            y="13.5484"
            width="6.7742"
            height="6.7742"
            fill="#22889C"
          />
          <rect
            x="13.5483"
            y="59.6776"
            width="6.7742"
            height="6.7742"
            fill="#A8F0FF"
          />
          <rect
            x="13.5483"
            y="20.3226"
            width="6.7742"
            height="6.7742"
            fill="white"
          />
          <rect
            x="20.3225"
            y="13.5484"
            width="6.7742"
            height="6.7742"
            fill="white"
          />
          <rect
            x="13.5483"
            y="13.5484"
            width="6.7742"
            height="6.7742"
            fill="#A8F0FF"
          />
          <rect
            x="20.3225"
            y="6.77429"
            width="39.3549"
            height="6.7742"
            fill="#A8F0FF"
          />
          <rect
            x="66.4517"
            y="59.6776"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="13.5483"
            y="66.4517"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="6.77417"
            y="59.6776"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="36.613"
            y="39.1129"
            width="6.7742"
            height="6.7742"
            fill="#5FDEF8"
          />
          <rect
            x="29.8386"
            y="32.3388"
            width="6.7742"
            height="6.7742"
            fill="#5FDEF8"
          />
          <rect
            x="36.613"
            y="32.3388"
            width="6.7742"
            height="6.7742"
            fill="#5FDEF8"
          />
          <rect
            x="43.3872"
            y="32.3388"
            width="6.7742"
            height="6.7742"
            fill="#5FDEF8"
          />
          <rect
            x="50.1614"
            y="32.3388"
            width="6.7742"
            height="6.7742"
            fill="#5FDEF8"
          />
          <rect
            x="23.0645"
            y="32.3388"
            width="6.7742"
            height="6.7742"
            fill="#5FDEF8"
          />
          <rect
            x="29.8386"
            y="39.1129"
            width="6.7742"
            height="6.7742"
            fill="#5FDEF8"
          />
          <rect
            x="29.8386"
            y="45.8871"
            width="6.7742"
            height="6.7742"
            fill="#5FDEF8"
          />
          <rect
            x="40"
            y="40.0001"
            width="6.7742"
            height="6.7742"
            fill="#5FDEF8"
          />
          <rect
            x="36.613"
            y="45.8871"
            width="6.7742"
            height="6.7742"
            fill="#5FDEF8"
          />
          <rect
            x="43.3872"
            y="39.1129"
            width="6.7742"
            height="6.7742"
            fill="#5FDEF8"
          />
          <rect
            x="43.3872"
            y="45.8872"
            width="6.7742"
            height="6.7742"
            fill="#5FDEF8"
          />
        </>
      )
    case 'PRE_ROLLS':
      return (
        <>
          <rect
            x="13.5483"
            y="13.5484"
            width="52.9033"
            height="52.9033"
            fill="#FF9C00"
          />
          <rect x="20.3228" width="39.3549" height="6.7742" fill="#181818" />
          <rect
            x="73.2258"
            y="20.3226"
            width="6.7742"
            height="39.3549"
            fill="#181818"
          />
          <rect
            x="59.6775"
            y="6.77429"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="66.4517"
            y="13.5484"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect y="20.3226" width="6.7742" height="39.3549" fill="#181818" />
          <rect
            x="13.5483"
            y="6.77429"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="6.77417"
            y="13.5484"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="20.3228"
            y="73.2258"
            width="39.3549"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="20.3228"
            y="66.4517"
            width="39.3549"
            height="6.7742"
            fill="#8B572A"
          />
          <rect
            x="59.6775"
            y="66.4517"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="59.6775"
            y="59.6776"
            width="6.7742"
            height="6.7742"
            fill="#8B572A"
          />
          <rect
            x="6.77417"
            y="20.3226"
            width="6.7742"
            height="39.3549"
            fill="#FFE56B"
          />
          <rect
            x="66.4517"
            y="20.3226"
            width="6.7742"
            height="39.3549"
            fill="#8B572A"
          />
          <rect
            x="59.6775"
            y="13.5484"
            width="6.7742"
            height="6.7742"
            fill="#8B572A"
          />
          <rect
            x="13.5483"
            y="59.6776"
            width="6.7742"
            height="6.7742"
            fill="#FFE56B"
          />
          <rect
            x="13.5483"
            y="20.3226"
            width="6.7742"
            height="6.7742"
            fill="white"
          />
          <rect
            x="20.3228"
            y="13.5484"
            width="6.7742"
            height="6.7742"
            fill="white"
          />
          <rect
            x="13.5483"
            y="13.5484"
            width="6.7742"
            height="6.7742"
            fill="#FFE56B"
          />
          <rect
            x="20.3228"
            y="6.77429"
            width="39.3549"
            height="6.7742"
            fill="#FFE56B"
          />
          <rect
            x="66.4517"
            y="59.6776"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="13.5483"
            y="66.4517"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="6.77417"
            y="59.6776"
            width="6.7742"
            height="6.7742"
            fill="#181818"
          />
          <rect
            x="46.7742"
            y="33.2258"
            width="6.7742"
            height="6.7742"
            fill="#FFE459"
          />
          <rect
            x="40"
            y="33.2258"
            width="6.7742"
            height="6.7742"
            fill="#FFE459"
          />
          <rect
            x="40"
            y="40.0001"
            width="6.7742"
            height="6.7742"
            fill="#FFE459"
          />
          <rect
            x="33.2258"
            y="33.2258"
            width="6.7742"
            height="6.7742"
            fill="#FFE459"
          />
          <rect
            x="40"
            y="26.4517"
            width="6.7742"
            height="6.7742"
            fill="#FFE459"
          />
          <rect
            x="40"
            y="26.4517"
            width="6.7742"
            height="6.7742"
            fill="#FFE459"
          />
          <rect
            x="46.7742"
            y="26.4517"
            width="6.7742"
            height="6.7742"
            fill="#EF4D61"
          />
          <rect
            x="33.2258"
            y="40.0001"
            width="6.7742"
            height="6.7742"
            fill="#FFE459"
          />
          <rect
            x="33.2258"
            y="46.7742"
            width="6.7742"
            height="6.7742"
            fill="#FFE459"
          />
          <rect
            x="26.4517"
            y="46.7742"
            width="6.7742"
            height="6.7742"
            fill="#FFE459"
          />
        </>
      )
    default:
      return null
  }
}

export default function Icon({
  type,
  width,
  height,
  viewBox,
  color,
}: IconProps) {
  return (
    <Svg
      type={type}
      width={width ?? 40}
      height={height ?? 40}
      viewBox={viewBox ?? '0 0 40 40'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {getIconByType(type, color)}
    </Svg>
  )
}
