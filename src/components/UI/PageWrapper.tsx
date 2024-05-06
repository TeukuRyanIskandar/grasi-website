type TPageWrapperProps = {
  children: React.ReactNode;
  style?: React.CSSProperties; // question mark means it is optional
  /** use the style prop to add custom styles to the PageWrapper component
   * Example:
   *  <PageWrapper style={{ backgroundColor: 'red', padding: '10px' }}>
        ...page content...
      </PageWrapper>
   */
};

/**
 * You can use this wrapper on pages, to wrap the content of the page
 */
function PageWrapper({ children, style }: TPageWrapperProps) {
  return (
    <div
      style={{
        /** Below are the default css applied to the wrapper
         * You can add more styles using the style prop
         */
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",

        /** Its good practice to have a max width for you page
         * You can always override this using the style prop
         * for specific width in a particular page
         */
        maxWidth: "1200px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default PageWrapper;
