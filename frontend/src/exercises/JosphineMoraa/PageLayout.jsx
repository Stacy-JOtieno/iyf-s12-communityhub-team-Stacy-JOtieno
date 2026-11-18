function PageLayout({ header, children, footer }) {
  return (
    <div className="page-layout">
      <header>{header}</header>

      <main>{children}</main>

      <footer>{footer}</footer>
    </div>
  );
}

export default PageLayout;