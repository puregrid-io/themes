export const umbraTheme = {
  /**
   * The background of the cells in a selection.
   */
  selectionBg: 'rgb(69, 71, 70)',
  /**
   * The text color of selected cells.
   */
  selectionTextColor: 'white',
  /**
   * The background that flashes for a moment to indicate the cells have been copied
   * to clipboard.
   */
  selectionCopiedBg: 'rgb(82, 91, 87)',
  /**
   * The color of icons such as those used for dragging and sorting.
   */
  iconColor: 'rgb(131, 143, 159)',
  /**
   * The grid radius of the top two corners.
   */
  gridRadius: '4px',

  /**
   * The padding of header cells.
   */
  headerCellPadding: '10px',
  /**
   * The BG of header cells. Should be set so that the body cells "slide" underneath.
   */
  headerCellBg: 'rgb(25, 26, 26)',
  /**
   * The header part of the grid border including around cells.
   */
  headerBorderColor: 'rgb(0, 0, 0)',
  /**
   * The background of the directional icon that indicates which side of a column the
   * dragged one will move to when released.
   */
  headerReorderIconBg: 'rgba(213, 219, 226, 0.9)',
  /**
   * The color of text in the header.
   * Set to null to inherit from your page.
   */
  headerTextColor: 'rgb(106 108 111)',

  /**
   * The BG of the resize area when hovered.
   */
  colResizeHoverBg: 'rgba(0, 0, 0, 0.08)',
  /**
   * The color of the resize grid icon.
   */
  colResizeIconColor: 'rgba(0, 0, 0, 0.3)',
  /**
   * The color of the vertical line which indicates how wide the column will be when
   * released.
   */
  colResizerMarker: 'rgb(0, 65, 228)',

  /**
   * The padding of a column filter cell.
   */
  filterCellPadding: '10px',
  /**
   * The BG of a column filter cell.
   */
  filterCellBg: 'rgb(15 15 15)',
  /**
   * The border color fo a column filter cell.
   */
  filterBorderColor: 'rgb(191 196 208)',
  /**
   * The color of text in the column filter row.
   */
  filterTextColor: 'rgb(131 136 142)',

  /**
   * The padding of grid cells. If you use `virtualRows` it's recommended you only set
   * the horizontal padding e.g. `0 10px` as the height will be fixed and the content
   * already vertically centered.
   */
  bodyCellPadding: '10px',
  /**
   * The BG of all grid cells.
   */
  bodyCellBg: 'rgb(20 20 20)',
  /**
   * The even (alternating) BG of grid cells.
   * Set to null if you don't want it.
   */
  bodyCellAltBg: null,
  /**
   * The hover BG of grid cells.
   */
  bodyCellHoverBg: 'rgb(44 46 46)',
  /**
   * The border color for the outer parts of the body area.
   */
  bodyBorderColor: 'rgb(27 28 28)',
  /**
   * The border color for the inner parts of the body area.
   * Set to 'transparent' if you don't want it.
   */
  cellBorderColor: 'rgb(27 28 28)',
  /**
   * The text color for the body area.
   * Set to null to inherit from your page.
   */
  bodyTextColor: 'rgb(150 150 155)',

  /**
   * Background of the footer area.
   */
  footerBg: 'rgb(25, 26, 26)',
  /**
   * Text color of the footer area.
   */
  footerTextColor: 'rgb(106 108 111)',
  /**
   * Footer container padding.
   */
  footerPadding: '10px',

  /**
   * The radius of buttons and inputs.
   */
  controlRadius: '6px',

  /**
   * The BG of buttons.
   */
  buttonBg: 'rgb(36 37 37)',
  /**
   * The active BG of buttons.
   */
  buttonBgActive: 'rgb(59 65 72)',
  /**
   * The text and icon color in buttons.
   */
  buttonTextColor: 'rgb(134 136 137)',
  /**
   * The border for buttons.
   */
  buttonBorder: '1px solid transparent',
  /**
   * The padding for buttons.
   */
  buttonPadding: '8px',

  /**
   * BG of inputs.
   */
  inputBg: 'rgb(51 53 53)',
  /**
   * Border color of inputs.
   */
  inputBorderColor: null,
  /**
   * Text color of inputs.
   */
  inputTextColor: 'rgb(130 130 130)',

  /**
   * The background of the loading overlay that covers the body of the Grid when
   * `loading={true}` is passed in.
  */
  loaderOverlayBg: 'rgba(255, 255, 255, 0.3)',

  /**
   * The background color of the spinner track.
   */
  spinnerBgColor: 'rgb(243 243 243)',
  /**
   * The foreground color of the spinner puck.
   */
  spinnerColor: 'rgb(52 152 219)',
};
