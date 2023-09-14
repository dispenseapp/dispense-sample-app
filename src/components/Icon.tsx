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
    case 'LOGO':
      return (
        <>
          <path
            d="M16.1061 23.4983H0V0.291301H4.60402V18.8537H16.1061V23.4983Z"
            fill="#2D69D5"
          />
          <path
            d="M34.2815 23.4983H18.5123V0.291301H34.2815V4.93594H23.1164V9.58058H30.6721V14.2252H23.1164V18.8537H34.2815V23.4983Z"
            fill="#2D69D5"
          />
          <path
            d="M51.0453 14.2252V9.58058C51.0453 8.94403 50.9223 8.34525 50.6763 7.78422C50.4411 7.21241 50.1149 6.71612 49.6978 6.29535C49.2807 5.87458 48.7887 5.54552 48.2219 5.30816C47.6658 5.06001 47.0723 4.93594 46.4413 4.93594C45.8103 4.93594 45.2114 5.06001 44.6446 5.30816C44.0885 5.54552 43.6019 5.87458 43.1848 6.29535C42.7677 6.71612 42.4361 7.21241 42.1902 7.78422C41.9549 8.34525 41.8373 8.94403 41.8373 9.58058V14.2252H51.0453ZM55.6493 23.4983H51.0453V18.8537H41.8373V23.4983H37.2493V9.58058C37.2493 8.2967 37.4899 7.09373 37.9712 5.97168C38.4524 4.83884 39.1048 3.85165 39.9283 3.01011C40.7624 2.16858 41.7357 1.50506 42.8479 1.01955C43.9708 0.534053 45.1686 0.291301 46.4413 0.291301C47.7139 0.291301 48.9064 0.534053 50.0186 1.01955C51.1416 1.50506 52.1201 2.16858 52.9543 3.01011C53.7885 3.85165 54.4462 4.83884 54.9274 5.97168C55.4087 7.09373 55.6493 8.2967 55.6493 9.58058V23.4983Z"
            fill="#2D69D5"
          />
          <path
            d="M64.2478 23.4983H59.6438V0.291301H75.7498V4.93594H64.2478V9.58058H71.1458V14.2252H64.2478V23.4983Z"
            fill="#2D69D5"
          />
          <path
            d="M95.6418 3.2205H99.1549V6.7323H92.3532C92.1179 6.7323 91.8933 6.78085 91.6794 6.87795C91.4762 6.96426 91.2944 7.08833 91.134 7.25017C90.9736 7.412 90.8452 7.60081 90.749 7.81659C90.6634 8.02158 90.6206 8.24275 90.6206 8.48011C90.6206 8.72825 90.6634 8.96561 90.749 9.19218C90.8452 9.40796 90.9736 9.59676 91.134 9.7586C91.2944 9.92043 91.4762 10.0499 91.6794 10.147C91.8933 10.2333 92.1179 10.2765 92.3532 10.2765H96.5401V13.7883H92.3532C92.1179 13.7883 91.8933 13.8368 91.6794 13.9339C91.4762 14.0202 91.2944 14.1443 91.134 14.3061C90.9736 14.468 90.8452 14.6568 90.749 14.8726C90.6634 15.0775 90.6206 15.2987 90.6206 15.5361C90.6206 15.7842 90.6634 16.0216 90.749 16.2481C90.8452 16.4639 90.9736 16.6527 91.134 16.8146C91.2944 16.9764 91.4762 17.1059 91.6794 17.203C91.8933 17.2893 92.1179 17.3324 92.3532 17.3324H99.1549V20.8442H95.6418V23.4983H92.69V20.8442H92.3532C91.6259 20.8442 90.9468 20.7094 90.3158 20.4396C89.6849 20.1591 89.1341 19.7815 88.6635 19.3068C88.193 18.8213 87.8187 18.2603 87.5406 17.6237C87.2732 16.9764 87.1396 16.2805 87.1396 15.5361C87.1396 14.8887 87.2518 14.263 87.4764 13.6588C87.701 13.0546 88.0379 12.5098 88.4871 12.0243C88.0379 11.5388 87.701 10.9939 87.4764 10.3898C87.2518 9.78557 87.1396 9.14902 87.1396 8.48011C87.1396 7.75725 87.2732 7.07755 87.5406 6.441C87.8187 5.79366 88.193 5.23264 88.6635 4.75792C89.1341 4.28321 89.6849 3.91099 90.3158 3.64127C90.9468 3.36076 91.6259 3.2205 92.3532 3.2205H92.69V0.258935H95.6418V3.2205Z"
            fill="#2D69D5"
          />
          <path
            d="M128.624 23.4983H112.518V0.291301H117.122V18.8537H128.624V23.4983Z"
            fill="#2D69D5"
          />
          <path
            d="M152.767 11.9919C152.767 13.0924 152.623 14.1551 152.334 15.18C152.056 16.1942 151.66 17.149 151.147 18.0445C150.633 18.9292 150.013 19.7384 149.286 20.472C148.559 21.2057 147.757 21.8368 146.88 22.3655C146.003 22.8833 145.056 23.2825 144.04 23.563C143.024 23.8543 141.971 24 140.88 24C139.789 24 138.736 23.8543 137.72 23.563C136.714 23.2825 135.768 22.8833 134.88 22.3655C134.003 21.8368 133.201 21.2057 132.474 20.472C131.747 19.7384 131.121 18.9292 130.597 18.0445C130.084 17.149 129.683 16.1942 129.394 15.18C129.116 14.1551 128.977 13.0924 128.977 11.9919C128.977 10.8914 129.116 9.82873 129.394 8.80378C129.683 7.77883 130.084 6.82401 130.597 5.93931C131.121 5.05462 131.747 4.24545 132.474 3.5118C133.201 2.77815 134.003 2.15239 134.88 1.63452C135.768 1.11666 136.714 0.717465 137.72 0.436952C138.736 0.145651 139.789 0 140.88 0C141.971 0 143.024 0.145651 144.04 0.436952C145.056 0.717465 146.003 1.11666 146.88 1.63452C147.757 2.15239 148.559 2.77815 149.286 3.5118C150.013 4.24545 150.633 5.05462 151.147 5.93931C151.66 6.82401 152.056 7.77883 152.334 8.80378C152.623 9.82873 152.767 10.8914 152.767 11.9919ZM148.195 11.9919C148.195 10.9777 148.002 10.0229 147.617 9.12744C147.232 8.22117 146.708 7.43897 146.045 6.78085C145.393 6.11194 144.618 5.58328 143.719 5.19488C142.832 4.80647 141.885 4.61227 140.88 4.61227C139.864 4.61227 138.912 4.80647 138.024 5.19488C137.137 5.58328 136.361 6.11194 135.698 6.78085C135.035 7.43897 134.511 8.22117 134.126 9.12744C133.741 10.0229 133.549 10.9777 133.549 11.9919C133.549 13.0061 133.741 13.9609 134.126 14.8564C134.511 15.7411 135.035 16.5179 135.698 17.1868C136.361 17.8557 137.137 18.3844 138.024 18.7728C138.912 19.1612 139.864 19.3554 140.88 19.3554C141.885 19.3554 142.832 19.1612 143.719 18.7728C144.618 18.3844 145.393 17.8557 146.045 17.1868C146.708 16.5179 147.232 15.7411 147.617 14.8564C148.002 13.9609 148.195 13.0061 148.195 11.9919Z"
            fill="#2D69D5"
          />
          <path
            d="M160.403 4.93594V14.2252H165.007C165.638 14.2252 166.231 14.1065 166.788 13.8692C167.344 13.621 167.83 13.2866 168.247 12.8658C168.664 12.445 168.991 11.9541 169.226 11.3931C169.472 10.8213 169.595 10.2171 169.595 9.58058C169.595 8.94403 169.472 8.34525 169.226 7.78422C168.991 7.21241 168.664 6.71612 168.247 6.29535C167.83 5.87458 167.344 5.54552 166.788 5.30816C166.231 5.06001 165.638 4.93594 165.007 4.93594H160.403ZM160.403 23.4983H155.799V0.291301H165.007C165.852 0.291301 166.665 0.404585 167.445 0.631153C168.226 0.846932 168.953 1.15981 169.627 1.56979C170.311 1.96898 170.932 2.45448 171.488 3.0263C172.055 3.58732 172.536 4.21308 172.932 4.90357C173.338 5.59407 173.648 6.33311 173.862 7.1207C174.087 7.90829 174.199 8.72825 174.199 9.58058C174.199 10.379 174.097 11.1558 173.894 11.911C173.702 12.6662 173.418 13.3837 173.044 14.0634C172.68 14.7431 172.231 15.3688 171.696 15.9407C171.162 16.5125 170.563 17.0088 169.9 17.4295L172.45 23.4983H167.558L165.552 18.8213L160.403 18.8537V23.4983Z"
            fill="#2D69D5"
          />
          <path
            d="M193 23.4983H177.231V0.291301H193V4.93594H181.835V9.58058H189.391V14.2252H181.835V18.8537H193V23.4983Z"
            fill="#2D69D5"
          />
        </>
      )
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