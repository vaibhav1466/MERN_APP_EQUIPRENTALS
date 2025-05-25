export default function Footer() {
  return (
    <>
      <footer className="content-footer footer bg-footer-theme">
        <div className="container-xxl">
          <div className="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
            <div className="mb-2 mb-md-0">
              ©<script>document.write(new Date().getFullYear());</script>, made
             by{" "}
              <a
                href="aa"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                EquipRentals
              </a>
            </div>
            <div className="d-none d-lg-inline-block">
              <a
                href="aa/"
                className="footer-link me-4"
                rel="noreferrer"
                target="_blank"
              >
                .
              </a>
              <a
                href="aa"
                target="_blank"
                className="footer-link me-4"
                rel="noreferrer"
              >
               .
              </a>
              <a
                href="aa"
                target="_blank"
                rel="noreferrer"
                className="footer-link me-4"
              >
           .
              </a>
              <a
                href="aa"
                target="_blank"
                className="footer-link d-none d-sm-inline-block"
                rel="noreferrer"
              >
              .
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
