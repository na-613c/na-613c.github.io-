import Icon from '@ant-design/icons';
import React from 'react';

const reduxSvg = () => {
    return <svg width="1em" height="1em" fill="currentColor"
                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M709.67392 704.16c37.088-3.2 65.824-35.84 63.968-74.848-1.952-39.008-33.92-70.304-72.864-70.304h-2.592a72.96 72.96 0 0 0-70.304 75.488c1.28 20.448 9.632 37.088 21.088 49.184-44.704 86.944-111.84 150.88-213.504 204.576-68.384 35.744-140.64 49.248-210.944 39.648-58.784-8.288-104.8-34.56-132.96-76.704-42.144-63.968-45.984-132.96-10.88-201.984 25.632-49.888 63.968-86.304 89.568-104.224a424.96 424.96 0 0 1-17.92-65.792C-36.95008 614.752-17.68608 800.096 39.81792 887.68c42.848 63.904 130.432 104.8 226.304 104.8 25.568 0 52.448-1.888 78.624-8.288 166.24-31.968 292.128-131.68 364.384-278.688l0.608-1.312z"
            fill="#764ABC"/>
        <path
            d="M937.86592 544.352c-99.04-116.352-244.832-180.256-411.04-180.256h-21.76c-10.784-23.648-35.712-38.368-63.872-38.368h-1.92c-40.224 0-71.584 34.56-70.272 74.784 1.28 38.304 33.888 70.304 72.864 70.304h3.168c28.8-1.28 53.728-19.2 63.904-44.768h23.68c98.528 0 191.776 28.768 276.832 84.992 65.152 42.848 111.872 99.072 138.08 166.24 22.944 54.944 21.728 108.672-1.92 153.472-36.448 70.272-97.824 107.392-178.976 107.392-51.168 0-100.992-16-126.592-27.488-15.328 12.704-40.928 33.824-59.488 46.624 56.224 25.504 113.152 40.224 168.096 40.224 124.672 0 217.312-70.272 252.512-138.08 38.304-76.704 35.168-205.824-62.688-316.416l-0.608 1.28z"
            fill="#764ABC"/>
        <path
            d="M276.90592 727.136c1.248 38.368 33.824 70.304 72.864 70.304h2.56a72 72 0 0 0 70.304-75.424c0-38.368-33.248-70.272-72.224-70.272h-2.592c-2.56 0-6.368 0-9.6 1.248-53.024-89.504-75.424-185.44-67.072-288.896 5.088-77.984 30.688-145.792 76.672-202.016 38.368-47.968 110.592-71.648 159.84-72.864 138.08-2.592 195.616 169.44 200.064 237.824l63.904 19.168C756.90592 136.544 626.56992 26.56 501.89792 26.56c-116.992 0-224.992 85.024-268.512 209.696-59.424 166.24-20.448 326.016 52.448 453.888-6.368 8.32-10.208 23.008-8.928 37.024z"
            fill="#764ABC"/>
    </svg>
};

const reduxIcon = (props: any) => <Icon component={reduxSvg} {...props} />;

export default reduxIcon;