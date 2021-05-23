import { DefaultTheme } from 'styled-components';
import { CardProps } from './types';
interface StyledCardProps extends CardProps {
    theme: DefaultTheme;
}
/**
 * Priority: Warning --> Success --> Active
 */
declare const StyledCard: import("styled-components").StyledComponent<"div", DefaultTheme, StyledCardProps, never>;
export default StyledCard;
