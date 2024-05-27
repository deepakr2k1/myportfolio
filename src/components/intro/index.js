import React from 'react';
import Button from '../UI/Button/index';
import './style.css';

function Intro() {
    return (
        <div id="home" className="flexRow justify-sb align-center">
            <div className="introLeft">
                <p className="uppercase bold-500 textColor ls-1 mtb-10 text-shadow">
                    <span className="primaryColor">Hello, </span>
                    I am Deepak Rathore
                </p>
                <svg id="logo">
                    <text x="0" y="100%">SOFTWARE DEVELOPER</text>
                </svg>
                <div className="flexRow" style={ { margin: "15px 5px" } }>
                    <div style={ { fontSize: "12px" } } >
                        <a href="mailto:deepakr2k1@icloud.com">
                            <Button href="" label="Get In Touch" />
                        </a>
                    </div>
                    {/* <div style={{font: "2rem"}} className="mlr-10" >
                        <a target="noreferrer" href="https://docs.google.com/document/d/1MWSyZI49IwoNViEl88rXD24tP4UhmN1nJWeaOjphDO4/edit?usp=sharing">
                            <Button label="Download Resume" />
                        </a>
                    </div> */}
                </div>
            </div>
            <div className="introRight">
                <svg id="baloon_svg" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="undraw_Floating_re_xtcj 1" clip-path="url(#clip0)">
                        <g id="cloud1" fill="#E9E9E9">
                            <path id="Vector" d="M334.038 162.414C333.648 162.414 333.273 162.269 332.988 162.009C332.703 161.749 332.53 161.394 332.502 161.014C331.495 147.636 325.354 135.124 315.309 125.98C305.263 116.836 292.054 111.736 278.325 111.7C276.682 111.7 274.956 111.782 273.195 111.943C272.9 111.97 272.604 111.914 272.341 111.78C272.079 111.647 271.861 111.443 271.714 111.192C265.407 100.407 255.989 91.6755 244.636 86.087C233.282 80.4984 220.495 78.3005 207.871 79.7674C195.247 81.2344 183.344 86.3012 173.649 94.3357C163.954 102.37 156.895 113.016 153.353 124.946C153.26 125.265 153.06 125.546 152.786 125.742C152.512 125.939 152.178 126.041 151.838 126.032L151.428 126.02C151.215 126.013 151.002 126.006 150.787 126.006C140.374 126.038 130.284 129.547 122.193 135.952C114.102 142.357 108.496 151.273 106.304 161.219C106.231 161.557 106.042 161.86 105.767 162.078C105.493 162.295 105.15 162.414 104.796 162.414H1.54125C1.1332 162.413 0.742228 162.254 0.454072 161.972C0.165915 161.689 0.00408936 161.307 0.00408936 160.908C0.00408936 160.51 0.165915 160.127 0.454072 159.845C0.742228 159.563 1.1332 159.404 1.54125 159.402H103.563C106.131 149.057 112.172 139.85 120.722 133.251C129.272 126.652 139.838 123.041 150.734 122.994C154.613 110.735 162.052 99.8407 172.148 91.6341C182.244 83.4276 194.562 78.2622 207.605 76.7655C220.649 75.2688 233.856 77.5052 245.624 83.2031C257.391 88.9009 267.211 97.8149 273.892 108.862C275.408 108.747 276.895 108.689 278.325 108.689C292.834 108.727 306.792 114.117 317.408 123.78C328.023 133.443 334.513 146.666 335.577 160.803C335.591 161 335.566 161.198 335.502 161.386C335.437 161.573 335.336 161.747 335.203 161.896C335.071 162.045 334.909 162.168 334.728 162.256C334.547 162.344 334.35 162.397 334.148 162.41C334.111 162.413 334.074 162.414 334.038 162.414Z" />
                            <path id="Vector_2" d="M315.7 181.721H62.9361C62.5274 181.721 62.1354 181.563 61.8463 181.28C61.5573 180.998 61.3949 180.615 61.3949 180.216C61.3949 179.816 61.5573 179.433 61.8463 179.151C62.1354 178.868 62.5274 178.71 62.9361 178.71H315.7C316.109 178.71 316.501 178.868 316.79 179.151C317.079 179.433 317.242 179.816 317.242 180.216C317.242 180.615 317.079 180.998 316.79 181.28C316.501 181.563 316.109 181.721 315.7 181.721Z" />
                            <path id="Vector_3" d="M124.586 203.556H39.8174C39.6147 203.557 39.4138 203.518 39.2264 203.443C39.0389 203.367 38.8685 203.256 38.725 203.116C38.5814 202.977 38.4675 202.81 38.3898 202.627C38.3121 202.444 38.2721 202.248 38.2721 202.05C38.2721 201.852 38.3121 201.656 38.3898 201.473C38.4675 201.29 38.5814 201.124 38.725 200.984C38.8685 200.844 39.0389 200.733 39.2264 200.658C39.4138 200.582 39.6147 200.544 39.8174 200.544H124.586C124.994 200.545 125.385 200.705 125.673 200.987C125.961 201.269 126.123 201.652 126.123 202.05C126.123 202.449 125.961 202.831 125.673 203.114C125.385 203.396 124.994 203.555 124.586 203.556Z" />
                        </g>
                        <g id="cloud2" fill="#E9E9E9">
                            <path id="Vector_4" d="M476.588 517.475C476.309 517.475 476.04 517.371 475.835 517.185C475.631 516.999 475.507 516.744 475.487 516.472C474.765 506.883 470.363 497.914 463.163 491.36C455.962 484.806 446.494 481.15 436.654 481.124C435.476 481.124 434.239 481.183 432.976 481.298C432.765 481.318 432.553 481.277 432.364 481.182C432.176 481.086 432.02 480.94 431.915 480.76C427.394 473.03 420.644 466.771 412.505 462.765C404.367 458.759 395.202 457.184 386.153 458.235C377.104 459.287 368.573 462.919 361.623 468.678C354.674 474.437 349.614 482.068 347.075 490.619C347.008 490.848 346.865 491.049 346.669 491.19C346.472 491.33 346.233 491.404 345.989 491.397L345.695 491.389C345.543 491.384 345.39 491.378 345.236 491.378C337.772 491.401 330.54 493.917 324.74 498.508C318.941 503.099 314.922 509.489 313.351 516.619C313.299 516.861 313.163 517.078 312.966 517.234C312.769 517.39 312.524 517.475 312.27 517.475H238.258C238.113 517.476 237.969 517.448 237.834 517.394C237.7 517.34 237.578 517.261 237.475 517.16C237.372 517.06 237.29 516.941 237.235 516.81C237.179 516.679 237.15 516.538 237.15 516.396C237.15 516.254 237.179 516.113 237.235 515.982C237.29 515.851 237.372 515.732 237.475 515.632C237.578 515.531 237.7 515.452 237.834 515.398C237.969 515.344 238.113 515.316 238.258 515.317H311.386C313.227 507.901 317.557 501.302 323.686 496.571C329.814 491.841 337.388 489.253 345.198 489.22C347.978 480.433 353.311 472.623 360.547 466.741C367.784 460.859 376.613 457.156 385.962 456.083C395.312 455.011 404.779 456.614 413.214 460.698C421.648 464.782 428.687 471.172 433.476 479.09C434.563 479.007 435.629 478.966 436.654 478.966C447.053 478.993 457.059 482.857 464.668 489.783C472.277 496.709 476.928 506.187 477.691 516.32C477.701 516.462 477.683 516.604 477.637 516.738C477.591 516.873 477.518 516.997 477.423 517.104C477.328 517.211 477.212 517.299 477.082 517.362C476.953 517.425 476.811 517.463 476.666 517.473C476.64 517.475 476.614 517.475 476.588 517.475Z" />
                            <path id="Vector_5" d="M463.444 531.315H282.265C282.12 531.315 281.976 531.288 281.842 531.234C281.707 531.179 281.585 531.1 281.482 531C281.379 530.9 281.297 530.78 281.242 530.649C281.186 530.518 281.157 530.377 281.157 530.235C281.157 530.093 281.186 529.953 281.242 529.822C281.297 529.69 281.379 529.571 281.482 529.471C281.585 529.371 281.707 529.291 281.842 529.237C281.976 529.183 282.12 529.156 282.265 529.156H463.444C463.737 529.156 464.018 529.27 464.225 529.472C464.432 529.675 464.548 529.949 464.548 530.235C464.548 530.522 464.432 530.796 464.225 530.999C464.018 531.201 463.737 531.315 463.444 531.315Z" />
                            <path id="Vector_6" d="M326.455 546.966H265.694C265.549 546.966 265.405 546.938 265.27 546.884C265.136 546.83 265.014 546.751 264.911 546.651C264.808 546.55 264.726 546.431 264.67 546.3C264.615 546.169 264.586 546.028 264.586 545.886C264.586 545.744 264.615 545.604 264.67 545.472C264.726 545.341 264.808 545.222 264.911 545.122C265.014 545.021 265.136 544.942 265.27 544.888C265.405 544.834 265.549 544.806 265.694 544.807H326.455C326.601 544.806 326.745 544.834 326.879 544.888C327.014 544.942 327.136 545.021 327.239 545.122C327.342 545.222 327.423 545.341 327.479 545.472C327.535 545.604 327.563 545.744 327.563 545.886C327.563 546.028 327.535 546.169 327.479 546.3C327.423 546.431 327.342 546.55 327.239 546.651C327.136 546.751 327.014 546.83 326.879 546.884C326.745 546.938 326.601 546.966 326.455 546.966V546.966Z" />
                        </g>
                        <g id="cloud3" fill="#E9E9E9">
                            <path id="Vector_7" d="M699.566 396.646C699.845 396.646 700.114 396.542 700.318 396.356C700.522 396.17 700.647 395.915 700.666 395.642C701.389 386.053 705.79 377.085 712.991 370.531C720.191 363.977 729.659 360.321 739.5 360.295C740.678 360.295 741.915 360.354 743.177 360.469C743.389 360.488 743.601 360.448 743.789 360.353C743.978 360.257 744.134 360.111 744.239 359.931C748.759 352.2 755.51 345.942 763.648 341.936C771.786 337.93 780.952 336.355 790.001 337.406C799.049 338.458 807.581 342.089 814.53 347.848C821.48 353.607 826.54 361.238 829.078 369.789C829.145 370.018 829.288 370.219 829.485 370.36C829.682 370.501 829.921 370.574 830.165 370.568L830.458 370.559C830.611 370.554 830.764 370.549 830.918 370.549C838.382 370.572 845.614 373.087 851.413 377.679C857.213 382.27 861.232 388.66 862.802 395.789C862.855 396.032 862.991 396.249 863.187 396.405C863.384 396.561 863.63 396.646 863.883 396.646H937.895C938.041 396.647 938.185 396.619 938.319 396.565C938.454 396.511 938.576 396.431 938.679 396.331C938.782 396.231 938.863 396.112 938.919 395.981C938.975 395.849 939.004 395.709 939.004 395.567C939.004 395.425 938.975 395.284 938.919 395.153C938.863 395.022 938.782 394.903 938.679 394.802C938.576 394.702 938.454 394.623 938.319 394.569C938.185 394.515 938.041 394.487 937.895 394.487H864.768C862.927 387.072 858.596 380.472 852.468 375.742C846.339 371.012 838.766 368.424 830.956 368.39C828.175 359.603 822.843 351.794 815.606 345.912C808.37 340.029 799.541 336.327 790.191 335.254C780.842 334.181 771.375 335.784 762.94 339.869C754.505 343.953 747.466 350.342 742.678 358.261C741.591 358.178 740.525 358.136 739.5 358.136C729.1 358.164 719.095 362.027 711.486 368.954C703.877 375.88 699.225 385.358 698.462 395.491C698.452 395.633 698.471 395.775 698.517 395.909C698.563 396.043 698.635 396.168 698.73 396.275C698.826 396.382 698.941 396.469 699.071 396.533C699.201 396.596 699.342 396.634 699.487 396.643C699.513 396.645 699.54 396.646 699.566 396.646Z" />
                            <path id="Vector_8" d="M712.71 410.486H893.888C894.181 410.486 894.462 410.372 894.669 410.169C894.877 409.967 894.993 409.692 894.993 409.406C894.993 409.12 894.877 408.845 894.669 408.643C894.462 408.441 894.181 408.327 893.888 408.327H712.71C712.417 408.327 712.136 408.441 711.929 408.643C711.722 408.845 711.605 409.12 711.605 409.406C711.605 409.692 711.722 409.967 711.929 410.169C712.136 410.372 712.417 410.486 712.71 410.486V410.486Z" />
                            <path id="Vector_9" d="M849.698 426.136H910.459C910.752 426.135 911.032 426.021 911.238 425.819C911.445 425.617 911.561 425.343 911.561 425.057C911.561 424.771 911.445 424.497 911.238 424.295C911.032 424.092 910.752 423.978 910.459 423.977H849.698C849.553 423.977 849.41 424.005 849.276 424.06C849.142 424.114 849.02 424.193 848.917 424.294C848.815 424.394 848.733 424.513 848.678 424.644C848.622 424.775 848.594 424.915 848.594 425.057C848.594 425.199 848.622 425.339 848.678 425.47C848.733 425.601 848.815 425.72 848.917 425.82C849.02 425.92 849.142 426 849.276 426.054C849.41 426.108 849.553 426.136 849.698 426.136V426.136Z" />
                        </g>
                        <g id="para1">
                            <path id="Vector_10" d="M737 195.586C737 360.53 560.24 439.455 560.24 439.455C560.24 439.455 381.666 360.53 378.04 195.586C375.909 98.6349 458.396 20 557.52 20C656.644 20 737 98.6125 737 195.586Z" fill="#6C63FF" />
                            <path id="Vector_11" d="M577.556 551.27C577.154 551.018 576.814 550.682 576.56 550.287C576.305 549.892 576.143 549.447 576.083 548.984C576.023 548.521 576.068 548.05 576.214 547.606C576.36 547.161 576.604 546.754 576.929 546.411L574.476 512.352L581.542 513.023L581.736 546.377C582.288 546.949 582.606 547.698 582.63 548.484C582.654 549.27 582.383 550.037 581.868 550.64C581.352 551.244 580.629 551.641 579.834 551.757C579.039 551.873 578.229 551.7 577.556 551.27Z" fill="#FFB7B7" />
                            <path id="Vector_12" d="M576.075 523.796C575.91 523.68 575.773 523.529 575.676 523.354C575.578 523.179 575.521 522.985 575.511 522.785L574.993 513.606C574.941 512.696 575.236 511.8 575.82 511.091C576.404 510.381 577.236 509.909 578.155 509.763C579.074 509.618 580.016 509.811 580.798 510.305C581.58 510.799 582.148 511.559 582.392 512.438L584.666 520.645C584.761 520.988 584.713 521.353 584.532 521.661C584.352 521.968 584.054 522.194 583.704 522.287L577.234 524.003C577.037 524.056 576.831 524.064 576.631 524.029C576.43 523.993 576.24 523.913 576.075 523.796Z" fill="#B626B0" />
                            <path id="Vector_13" d="M570.031 501.979C574.154 501.979 577.495 498.71 577.495 494.677C577.495 490.644 574.154 487.375 570.031 487.375C565.909 487.375 562.567 490.644 562.567 494.677C562.567 498.71 565.909 501.979 570.031 501.979Z" fill="#FFB7B7" />
                            <path id="Vector_14" d="M575.313 500.454C575.001 500.784 574.599 501.019 574.155 501.132C573.711 501.246 573.243 501.233 572.807 501.096C572.37 500.958 571.982 500.701 571.689 500.356C571.396 500.01 571.21 499.59 571.153 499.144C571.139 498.99 571.14 498.835 571.156 498.682C571.25 497.803 571.769 497.006 571.644 496.079C571.616 495.848 571.528 495.628 571.389 495.44C570.279 493.986 567.675 496.09 566.627 494.774C565.985 493.967 566.74 492.697 566.247 491.795C565.597 490.605 563.671 491.192 562.463 490.54C561.119 489.815 561.199 487.797 562.084 486.57C562.66 485.845 563.392 485.253 564.228 484.837C565.065 484.42 565.985 484.189 566.923 484.16C568.801 484.117 570.667 484.473 572.391 485.204C574.427 485.852 576.223 487.07 577.557 488.709C578.248 489.783 578.685 490.994 578.838 492.254C578.991 493.513 578.855 494.791 578.442 495.993C577.99 497.468 576.45 499.269 575.313 500.454Z" fill="#2F2E41" />
                            <path id="Vector_15" d="M577.482 506.857C577.352 506.766 577.22 506.676 577.085 506.589C576.368 506.122 575.592 505.75 574.777 505.481V503.563H569.002V505.343C567.088 505.859 565.372 506.915 564.066 508.379C562.76 509.842 561.923 511.649 561.659 513.574L557.727 542.131C557.702 542.31 557.714 542.491 557.763 542.665C557.811 542.839 557.896 543.002 558.01 543.143C558.122 543.283 558.262 543.399 558.422 543.484C558.582 543.57 558.757 543.623 558.938 543.64C561.693 543.989 564.347 544.879 566.742 546.255C568.481 547.197 570.439 547.686 572.427 547.675C574.006 547.669 575.571 547.396 577.054 546.869C577.306 546.778 577.524 546.616 577.682 546.405C577.84 546.193 577.93 545.94 577.941 545.678C578.083 542.605 578.911 526.785 581.322 517.136C581.791 515.243 581.676 513.257 580.993 511.428C580.309 509.599 579.088 508.008 577.482 506.857Z" fill="#B626B0" />
                            <path id="Vector_16" d="M620.066 449.21H500.413L485.91 392.455H634.57L620.066 449.21Z" fill="#3F3D56" />
                            <path id="Vector_17" d="M615.987 546.271H504.492V603.113H615.987V546.271Z" fill="#5750D6" />
                            <path id="Vector_18" d="M616.894 604H503.586V545.384H616.894V604ZM505.398 602.226H615.081V547.157H505.398V602.226Z" fill="#3F3D56" />
                            <path id="Vector_19" d="M583.094 455.903H537.385L532.139 447.838H588.34L583.094 455.903Z" fill="#3F3D56" />
                            <path id="Vector_20" d="M503.132 449.21H501.319V536.116H503.132V449.21Z" fill="#3F3D56" />
                            <path id="Vector_21" d="M619.16 449.21H617.347V536.116H619.16V449.21Z" fill="#3F3D56" />
                            <path id="Vector_22" d="M578.412 391.494L577.305 390.089C629.679 350.577 692.111 282.886 692.111 184.792C692.153 150.436 681.825 116.833 662.422 88.1967C643.02 59.5603 615.407 37.1658 583.046 23.8217L583.752 22.1884C616.442 35.6679 644.335 58.2897 663.934 87.2166C683.533 116.144 693.966 150.088 693.924 184.792C693.924 283.606 631.108 351.738 578.412 391.494Z" fill="#3F3D56" />
                            <path id="Vector_23" d="M520.397 391.494L519.29 390.089C571.665 350.577 634.097 282.886 634.097 184.792C634.111 150.667 623.907 117.286 604.745 88.771C585.583 60.2561 558.303 37.8572 526.274 24.3409L526.993 22.7128C559.347 36.3662 586.904 58.9925 606.26 87.7967C625.617 116.601 635.924 150.321 635.91 184.792C635.91 283.607 573.094 351.739 520.397 391.494Z" fill="#3F3D56" />
                            <path id="Vector_24" d="M594.642 391.494C541.946 351.739 479.13 283.607 479.13 184.792C479.116 150.321 489.424 116.6 508.78 87.796C528.137 58.9917 555.695 36.3655 588.049 22.7124L588.768 24.3405C556.738 37.8565 529.458 60.2554 510.296 88.7704C491.133 117.285 480.929 150.667 480.943 184.792C480.943 282.886 543.375 350.577 595.749 390.089L594.642 391.494Z" fill="#3F3D56" />
                            <path id="Vector_25" d="M536.629 391.494C483.933 351.739 421.117 283.607 421.117 184.792C421.058 149.951 431.564 115.875 451.306 86.8771C471.048 57.8788 499.139 35.2611 532.024 21.8858L532.723 23.5225C500.168 36.7634 472.359 59.1538 452.815 87.8608C433.272 116.568 422.871 150.301 422.93 184.792C422.93 282.887 485.362 350.577 537.736 390.089L536.629 391.494Z" fill="#3F3D56" />
                            <path id="Vector_26" d="M558.427 20H556.614V392.455H558.427V20Z" fill="#3F3D56" />
                            <path id="Vector_27" d="M626.411 533.456H490.442V549.418H626.411V533.456Z" fill="#3F3D56" />
                            <path id="Vector_28" d="M627.318 550.305H489.535V532.569H627.318V550.305ZM491.348 548.531H625.505V534.343H491.348V548.531Z" fill="#3F3D56" />
                            <path id="Vector_29" d="M546.393 531.143C546.424 530.989 546.445 530.833 546.454 530.675L560.044 525.315L562.877 521.153L557.192 516.607L544.72 527.648C544.211 527.436 543.657 527.404 543.131 527.555C542.606 527.705 542.134 528.032 541.778 528.491C541.422 528.95 541.199 529.52 541.138 530.125C541.078 530.73 541.183 531.341 541.439 531.877C541.696 532.413 542.092 532.849 542.575 533.126C543.058 533.404 543.604 533.51 544.142 533.43C544.68 533.35 545.183 533.089 545.585 532.68C545.987 532.272 546.269 531.736 546.393 531.143Z" fill="#FFB7B7" />
                            <path id="Vector_30" d="M556.577 516.253C556.555 516.055 556.579 515.854 556.647 515.666C556.715 515.478 556.825 515.307 556.97 515.167L563.614 508.665C564.272 508.021 565.151 507.638 566.081 507.59C567.011 507.542 567.925 507.833 568.649 508.406C569.373 508.979 569.854 509.794 570 510.694C570.146 511.593 569.946 512.514 569.439 513.278L564.707 520.411C564.51 520.709 564.2 520.917 563.845 520.991C563.49 521.065 563.12 520.998 562.816 520.805L557.192 517.235C557.021 517.127 556.877 516.982 556.77 516.812C556.664 516.642 556.598 516.451 556.577 516.253Z" fill="#B626B0" />
                        </g>
                        <g id="para2" fill="#3F3D56">
                            <path id="Vector_31" d="M235.393 473.233C235.393 534.453 169.702 563.746 169.702 563.746C169.702 563.746 103.337 534.453 101.989 473.233C101.197 437.249 131.853 408.064 168.691 408.064C177.45 408.064 186.124 409.749 194.217 413.024C202.309 416.299 209.663 421.1 215.856 427.151C222.05 433.203 226.963 440.387 230.316 448.294C233.668 456.2 235.393 464.675 235.393 473.233Z" fill="#DD5566" />
                            <path id="Vector_32" d="M191.936 567.366H147.468L142.077 546.302H197.326L191.936 567.366Z" />
                            <path id="Vector_33" d="M190.42 603.391H148.984V624.488H190.42V603.391Z" fill="#C04D5C" />
                            <path id="Vector_34" d="M190.757 624.817H148.647V603.062H190.757V624.817ZM149.32 624.159H190.083V603.72H149.32V624.159Z" />
                            <path id="Vector_35" d="M178.196 569.851H161.208L159.259 566.858H180.145L178.196 569.851Z" />
                            <path id="Vector_36" d="M148.478 567.367H147.805V599.622H148.478V567.367Z" />
                            <path id="Vector_37" d="M191.599 567.367H190.925V599.622H191.599V567.367Z" />
                            <path id="Vector_38" d="M176.455 545.945L176.044 545.424C195.508 530.758 218.71 505.635 218.71 469.227C218.726 456.476 214.888 444.004 207.677 433.375C200.466 422.747 190.204 414.435 178.177 409.482L178.44 408.876C190.588 413.879 200.955 422.275 208.239 433.011C215.523 443.748 219.4 456.346 219.384 469.227C219.384 505.902 196.039 531.189 176.455 545.945Z" />
                            <path id="Vector_39" d="M154.895 545.945L154.483 545.424C173.948 530.759 197.15 505.635 197.15 469.227C197.155 456.561 193.363 444.172 186.242 433.588C179.12 423.005 168.982 414.691 157.079 409.675L157.346 409.07C169.37 414.138 179.611 422.536 186.805 433.227C193.998 443.917 197.829 456.433 197.824 469.227C197.824 505.902 174.479 531.19 154.895 545.945Z" />
                            <path id="Vector_40" d="M182.487 545.945C162.903 531.19 139.558 505.902 139.558 469.227C139.553 456.433 143.384 443.917 150.577 433.226C157.771 422.535 168.013 414.138 180.037 409.07L180.304 409.675C168.4 414.691 158.262 423.005 151.14 433.588C144.019 444.171 140.227 456.561 140.232 469.227C140.232 505.635 163.434 530.758 182.898 545.424L182.487 545.945Z" />
                            <path id="Vector_41" d="M160.927 545.945C141.343 531.19 117.998 505.902 117.998 469.227C117.976 456.295 121.88 443.648 129.217 432.885C136.554 422.122 146.994 413.728 159.216 408.763L159.475 409.371C147.377 414.285 137.042 422.596 129.778 433.25C122.515 443.905 118.65 456.425 118.672 469.227C118.672 505.635 141.874 530.759 161.338 545.424L160.927 545.945Z" />
                            <path id="Vector_42" d="M169.028 408.064H168.354V546.302H169.028V408.064Z" />
                            <path id="Vector_43" d="M194.294 598.635H143.762V604.559H194.294V598.635Z" />
                            <path id="Vector_44" d="M194.631 604.888H143.425V598.306H194.631V604.888ZM144.099 604.23H193.957V598.964H144.099V604.23Z" />
                        </g>
                        <g id="para3" fill="#3F3D56">
                            <path id="Vector_45" d="M339.743 320.71C339.743 361.118 296.384 380.452 296.384 380.452C296.384 380.452 252.58 361.118 251.691 320.71C251.168 296.959 271.402 277.695 295.717 277.695C307.393 277.695 318.592 282.227 326.848 290.294C335.105 298.361 339.743 309.302 339.743 320.71V320.71Z" fill="#B1B44C" />
                            <path id="Vector_46" d="M311.059 382.842H281.708L278.151 368.938H314.617L311.059 382.842Z" />
                            <path id="Vector_47" d="M310.059 406.62H282.709V420.545H310.059V406.62Z" fill="#B1B44C" />
                            <path id="Vector_48" d="M310.281 420.762H282.487V406.403H310.281V420.762ZM282.931 420.328H309.836V406.837H282.931V420.328Z" />
                            <path id="Vector_49" d="M301.99 384.482H290.777L289.491 382.506H303.277L301.99 384.482Z" />
                            <path id="Vector_50" d="M282.376 382.842H281.931V404.132H282.376V382.842Z" />
                            <path id="Vector_51" d="M310.837 382.842H310.392V404.132H310.837V382.842Z" />
                            <path id="Vector_52" d="M300.842 368.703L300.57 368.359C313.417 358.679 328.732 342.096 328.732 318.066C328.742 309.649 326.209 301.417 321.449 294.402C316.69 287.387 309.916 281.9 301.978 278.631L302.152 278.231C310.17 281.533 317.012 287.075 321.82 294.162C326.628 301.248 329.187 309.564 329.176 318.066C329.176 342.273 313.768 358.964 300.842 368.703Z" />
                            <path id="Vector_53" d="M286.611 368.703L286.339 368.359C299.186 358.679 314.501 342.096 314.501 318.066C314.504 309.706 312.001 301.528 307.301 294.543C302.601 287.557 295.909 282.07 288.052 278.759L288.228 278.36C296.165 281.705 302.925 287.248 307.673 294.304C312.421 301.36 314.949 309.621 314.946 318.066C314.946 342.273 299.537 358.964 286.611 368.703Z" />
                            <path id="Vector_54" d="M304.823 368.703C291.897 358.964 276.488 342.273 276.488 318.066C276.484 309.621 279.013 301.36 283.761 294.304C288.509 287.247 295.269 281.704 303.205 278.36L303.382 278.759C295.525 282.07 288.833 287.557 284.133 294.542C279.432 301.528 276.929 309.706 276.932 318.066C276.932 342.096 292.247 358.679 305.094 368.359L304.823 368.703Z" />
                            <path id="Vector_55" d="M290.592 368.703C277.666 358.964 262.257 342.273 262.257 318.066C262.243 309.53 264.82 301.183 269.662 294.079C274.505 286.975 281.396 281.434 289.463 278.157L289.634 278.558C281.648 281.802 274.827 287.287 270.033 294.32C265.239 301.352 262.687 309.616 262.702 318.066C262.702 342.097 278.016 358.679 290.864 368.359L290.592 368.703Z" />
                            <path id="Vector_56" d="M295.939 277.695H295.494V368.938H295.939V277.695Z" />
                            <path id="Vector_57" d="M312.616 403.48H279.263V407.391H312.616V403.48Z" />
                            <path id="Vector_58" d="M312.838 407.608H279.04V403.263H312.838V407.608ZM279.485 407.174H312.393V403.698H279.485V407.174Z" />
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_d" x="694.46" y="334.93" width="248.544" height="99.2062" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                        </filter>
                        <clipPath id="clip0">
                            <rect width="939" height="698" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    );
}

export default Intro;