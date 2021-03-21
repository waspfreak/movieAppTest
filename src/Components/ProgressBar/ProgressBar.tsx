import React, { useEffect, useState, useRef } from 'react';
import { Svg, CircleBg, Circle, CircleText, Container } from './style';

/**
 * Progress Bar UI component for user interaction
 */

export interface ProgressBarProps {
	size: number,
	progress: number,
	strokeWidth: number,
	circleOneStroke: string,
	circleTwoStroke: string,
	stroke?: string | undefined,
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
	size,
	progress,
	strokeWidth,
	stroke,
	circleOneStroke,
	circleTwoStroke,
	...props
}) => {

	const [offset, setOffset] = useState(0);
	const circleRef = useRef(null);

	const center = size / 2;
	const radius = size / 2 - strokeWidth / 2;
	const circumference = 2 * Math.PI * radius;

	useEffect(() => {
		const progressOffset = ((100 - progress) / 100) * circumference;
		setOffset(progressOffset);

		circleRef.current.style = 'transition: stroke-dashoffset 850ms ease-in-out';
	}, [setOffset, progress, circumference, offset]);

	return (
		<Container {...props}>
			<Svg width={size} height={size}>
				<CircleBg
					stroke={circleOneStroke}
					cx={center}
					cy={center}
					r={radius}
					strokeWidth={strokeWidth}
				/>
				<Circle
					ref={circleRef}
					stroke={circleTwoStroke}
					cx={center}
					cy={center}
					r={radius}
					strokeWidth={strokeWidth}
					strokeDasharray={circumference}
					strokeDashoffset={offset}
				/>
				<CircleText x={`${center}`} y={`${center}`}>
					{progress}%
				</CircleText>
			</Svg>
		</Container>
	);
};

export default ProgressBar;
