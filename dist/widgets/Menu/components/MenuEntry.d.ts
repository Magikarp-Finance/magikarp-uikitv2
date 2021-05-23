import React from 'react';
import { DefaultTheme } from 'styled-components';
export interface Props {
    secondary?: boolean;
    isActive?: boolean;
    isPushed?: boolean;
    theme: DefaultTheme;
}
declare const MenuEntry: import("styled-components").StyledComponent<"div", DefaultTheme, Props, never>;
declare const LinkStatus: import("styled-components").StyledComponent<"div", DefaultTheme, import("../../../components/Text").TextProps, never>;
declare const LinkLabelMemo: React.MemoExoticComponent<import("styled-components").StyledComponent<"div", DefaultTheme, {
    isPushed: boolean;
}, never>>;
export { MenuEntry, LinkStatus, LinkLabelMemo as LinkLabel };
