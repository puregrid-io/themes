declare module '@puregrid/themes' {
  export interface Theme {
    /**
     * The background of the cells in a selection.
     */
    selectionBg: string | null;
    /**
     * The text color of selected cells.
     */
    selectionTextColor: string | null;
    /**
     * The background that flashes for a moment to indicate the cells have been copied
     * to clipboard.
     */
    selectionCopiedBg: string | null;

    /**
     * The color of icons such as those used for dragging and sorting.
     */
    iconColor: string | null;

    /**
     * The padding of header cells.
     */
    headerCellPadding: string | null;
    /**
     * The BG of header cells. Should be set so that the body cells "slide" underneath.
     */
    headerCellBg: string | null;
    /**
     * The header part of the grid border including around cells.
     */
    headerBorderColor: string | null;
    /**
     * The background of the directional icon that indicates which side of a column the
     * dragged one will move to when released.
     */
    headerReorderIconBg: string | null;
    /**
     * The color of text in the header.
     * Set to null to inherit from your page.
     */
    headerTextColor: string | null;

    /**
     * The BG of the resize area when hovered.
     */
    colResizeHoverBg: string | null;
    /**
     * The color of the resize grid icon.
     */
    colResizeIconColor: string | null;
    /**
     * The color of the vertical line which indicates how wide the column will be when
     * released.
     */
    colResizerMarker: string | null;

    /**
     * The padding of a column filter cell.
     */
    filterCellPadding: string | null;
    /**
     * The BG of a column filter cell.
     */
    filterCellBg: string | null;
    /**
     * The border color fo a column filter cell.
     */
    filterBorderColor: string | null;
    /**
     * The color of text in the column filter row.
     */
    filterTextColor: string | null;

    /**
     * The padding of grid cells. If you use `virtualRows` it's recommended you only set
     * the horizontal padding e.g. `0 10px` as the height will be fixed and the content
     * already vertically centered.
     */
    bodyCellPadding: string | null;
    /**
     * The BG of all grid cells.
     */
    bodyCellBg: string | null;
    /**
     * The even (alternating) BG of grid cells.
     * Set to null if you don't want it.
     */
    bodyCellAltBg: string | null;
    /**
     * The hover BG of grid cells.
     */
    bodyCellHoverBg: string | null;
    /**
     * The border color for the outer parts of the body area.
     */
    bodyBorderColor: string | null;
    /**
     * The border color for the inner parts of the body area.
     * Set to 'transparent' if you don't want it.
     */
    cellBorderColor: string | null;
    /**
     * The text color for the body area.
     * Set to null to inherit from your page.
     */
    bodyTextColor: string | null;

    /**
     * Background of the footer area.
     */
    footerBg: string | null;
    /**
     * Text color of the footer area.
     */
    footerTextColor: string | null;
    /**
     * Footer container padding.
     */
    footerPadding: string | null;

    /**
     * The radius of buttons and inputs.
     */
    controlRadius: string | null;
    /**
     * The BG of buttons.
     */
    buttonBg: string | null;
    /**
     * The active BG of buttons.
     */
    buttonBgActive: string | null;
    /**
     * The text and icon color in buttons.
     */
    buttonTextColor: string | null;
    /**
     * The border for buttons.
     */
    buttonBorder: string | null;
    /**
     * The padding for buttons.
     */
    buttonPadding: string | null;

    /**
     * BG of inputs.
     */
    inputBg: string | null;
    /**
     * Border color of inputs.
     */
    inputBorderColor: string | null;
    /**
     * Text color of inputs.
     */
    inputTextColor: string | null;

    /**
     * The background of the loading overlay that covers the body of the Grid when
     * `loading={true}` is passed in.
     */
    loaderOverlayBg: string | null;
    /**
     * The background color of the spinner track.
     */
    spinnerBgColor: string | null;
    /**
     * The foreground color of the spinner puck.
     */
    spinnerColor: string | null;

    /**
     * The background color of the spinner track.
     */
    scrollTrackColor: string | null;
    /**
     * The foreground color of the spinner puck.
     */
    scrollThumbColor: string | null;
  }

  export const auroraTheme: Theme;
  export const umbraTheme: Theme;
}
