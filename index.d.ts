declare module '@puregrid/themes' {
  export interface Theme {
    selectionBg: string | null;
    selectionTextColor: string | null;
    selectionCopiedBg: string | null;
    iconColor: string | null;
    gridRadius: string | null;

    headerCellPadding: string | null;
    headerCellBg: string | null;
    headerBorderColor: string | null;
    headerReorderIconBg: string | null;
    headerTextColor: string | null;

    colResizeHoverBg: string | null;
    colResizeIconColor: string | null;
    colResizerMarker: string | null;

    filterCellPadding: string | null;
    filterCellBg: string | null;
    filterBorderColor: string | null;
    filterTextColor: string | null;

    bodyCellPadding: string | null;
    bodyCellBg: string | null;
    bodyCellHoverBg: string | null;
    bodyBorderColor: string | null;
    cellBorderColor: string | null;
    bodyTextColor: string | null;

    controlRadius: string | null;

    buttonBg: string | null;
    buttonBgActive: string | null;
    buttonBorder: string | null;
    buttonPadding: string | null;

    inputBg: string | null;
    inputBgActive: string | null;
  }

  export const auroraTheme: Theme;
  export const umbraTheme: Theme;
}
