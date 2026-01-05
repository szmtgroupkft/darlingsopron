const COMPANY = {
  companyName: "SZMT GROUP KFT.",
  brandName: "Darling, I’ll call you later…",
  domain: "darlingsopron.hu",
  phone: "+36 70 742 6894",
  email: "darlingsopron@gmail.com",
  storeAddress: "9400 Sopron, Várkerület 57.",
  registeredAddress: "9400 Sopron, Deákkúti út 16/A 2. em. 7. ajtó",
  orderUrl: "https://darling.waiterio.com/en/menu",
  facebookUrl: "https://www.facebook.com/profile.php?id=61559651763220",
  instagramUrl: "https://www.instagram.com/darlingsopron/",
  deliveryArea: "Sopron és környéke (10 km-ig)",
  minOrderHuf: 2500,
  deliveryFeeOver10kmHuf: 700,
  payments: ["Készpénz", "Bankkártya a futárnál", "Online bankkártya"],
  invoiceNote: "Áfás számlát előre jelzés esetén kiállítunk és csatolunk.",
  confirmationNote: "Automatikus email vagy SMS visszaigazolás lehetséges.",
  mapsQuery: "9400 Sopron Várkerület 57",
};

function formatHUF(n: number) {
  return new Intl.NumberFormat("hu-HU", { style: "currency", currency: "HUF", maximumFractionDigits: 0 }).format(n);
}

function ButtonLink({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "ghost" }) {
  return (
    <a
      className={`btn ${variant === "primary" ? "btnPrimary" : "btnGhost"}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="page">
      <header className="header">
        <div className="headerInner">
          <div className="brand">
            <div className="logoBox">
              {/* Ha van logo a public mappában: /darling-logo.png */}
              <img src="/darling-logo.png" alt="Darling logo" className="logo" />
            </div>
            <div className="brandText">
              <div className="brandName">{COMPANY.brandName}</div>
              <div className="brandSub">Kiszállítás • Sopron</div>
            </div>
          </div>

          <nav className="nav">
            <a href="#order">Menü</a>
            <a href="#info">Szállítás</a>
            <a href="#legal">ÁSZF</a>
            <a href="#map">Térkép</a>
            <a className="navCTA" href={COMPANY.orderUrl} target="_blank" rel="noreferrer">Rendelés</a>
          </nav>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <div className="heroGrid">
            <div>
              <h1>Rendelj online – a rendelés közvetlenül a konyhára érkezik.</h1>
              <p className="lead">
                {COMPANY.deliveryArea}. Minimum rendelés: <b>{formatHUF(COMPANY.minOrderHuf)}</b>. 10 km-ig <b>ingyenes</b> kiszállítás, 10 km felett <b>{formatHUF(COMPANY.deliveryFeeOver10kmHuf)}</b>.
              </p>

              <div className="ctaRow">
                <ButtonLink href={COMPANY.orderUrl} variant="primary">Menü & rendelés</ButtonLink>
                <a className="btn btnGhost" href="#order">Menü beágyazva</a>
              </div>

              <div className="pillRow">
                <span className="pill">Fizetés: {COMPANY.payments.join(" • ")}</span>
                <span className="pill">{COMPANY.invoiceNote}</span>
              </div>
            </div>

            <div className="heroCard">
              <div className="cardTitle">Gyors infók</div>
              <div className="kv">
                <div className="k">Telefon</div>
                <div className="v"><a href={`tel:${COMPANY.phone.replace(/\s+/g,"")}`}>{COMPANY.phone}</a></div>
              </div>
              <div className="kv">
                <div className="k">Email</div>
                <div className="v"><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></div>
              </div>
              <div className="kv">
                <div className="k">Cím</div>
                <div className="v">{COMPANY.storeAddress}</div>
              </div>
              <div className="divider" />
              <div className="small">
                Tipp: ha nem látod a beágyazott menüt, nyisd meg új lapon.
              </div>
              <div className="ctaRow" style={{ marginTop: 12 }}>
                <ButtonLink href={COMPANY.orderUrl} variant="primary">Megnyitás új lapon</ButtonLink>
              </div>
            </div>
          </div>
        </section>

        <section id="order" className="section">
          <div className="sectionHeader">
            <h2>Menü & rendelés</h2>
            <p>A kosár és a fizetés a Waiterio felületén történik, így a rendelés közvetlenül érkezik a rendszeretekbe.</p>
            <div className="ctaRow">
              <ButtonLink href={COMPANY.orderUrl} variant="primary">Rendelés indítása</ButtonLink>
            </div>
          </div>

          <div className="embedWrap">
            <iframe
              title="Waiterio menu"
              className="embed"
              src={COMPANY.orderUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section id="info" className="section">
          <div className="grid3">
            <div className="card">
              <div className="cardTitle">Szállítás</div>
              <div className="cardBody">
                <p><b>Szállítási zóna:</b> {COMPANY.deliveryArea}</p>
                <p><b>Minimum rendelés:</b> {formatHUF(COMPANY.minOrderHuf)}</p>
                <p><b>Díj:</b> 10 km-ig ingyenes • 10 km felett {formatHUF(COMPANY.deliveryFeeOver10kmHuf)}</p>
              </div>
            </div>

            <div className="card">
              <div className="cardTitle">Fizetés</div>
              <div className="cardBody">
                <ul>
                  {COMPANY.payments.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="cardTitle">Számla & visszaigazolás</div>
              <div className="cardBody">
                <p>{COMPANY.invoiceNote}</p>
                <p>{COMPANY.confirmationNote}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="legal" className="section">
          <div className="sectionHeader">
            <h2>ÁSZF & Adatkezelés</h2>
            <p className="small">Az alábbi szöveg induló minta; véglegesítés előtt érdemes jogásszal átnézetni.</p>
          </div>

          <div className="grid2">
            <div className="card">
              <div className="cardTitle">Impresszum (minta)</div>
              <div className="cardBody">
                <p><b>Üzemeltető:</b> {COMPANY.companyName}</p>
                <p><b>Domain:</b> {COMPANY.domain}</p>
                <p><b>Kapcsolat:</b> {COMPANY.email} • {COMPANY.phone}</p>
                <p><b>Üzlet címe:</b> {COMPANY.storeAddress}</p>
                <p><b>Székhely:</b> {COMPANY.registeredAddress}</p>
                <p className="small">(Adószám, cégjegyzékszám, nyilvántartó bíróság: ide kerül.)</p>
              </div>
            </div>

            <div className="card">
              <div className="cardTitle">ÁSZF – fő pontok (minta)</div>
              <div className="cardBody">
                <details>
                  <summary>Rendelés</summary>
                  <p>A rendelés a Waiterio felületén adható le. A rendelés elküldése fizetési kötelezettséget von maga után.</p>
                </details>
                <details>
                  <summary>Kiszállítás</summary>
                  <p>Szállítási zóna: {COMPANY.deliveryArea}. Minimum rendelés: {formatHUF(COMPANY.minOrderHuf)}. 10 km-ig ingyenes, 10 km felett {formatHUF(COMPANY.deliveryFeeOver10kmHuf)}.</p>
                </details>
                <details>
                  <summary>Fizetés</summary>
                  <p>Elfogadott fizetési módok: {COMPANY.payments.join(", ")}.</p>
                </details>
                <details>
                  <summary>Adatkezelés</summary>
                  <p>Kezelt adatok: név, telefonszám, cím, rendelési adatok. Cél: rendelés teljesítése, kapcsolatfelvétel, számlázás, visszaigazolás. A rendelési felületet a Waiterio biztosítja.</p>
                </details>
              </div>
            </div>
          </div>
        </section>

        <section id="map" className="section">
          <div className="sectionHeader">
            <h2>Hol találsz minket</h2>
            <p>{COMPANY.storeAddress}</p>
          </div>

          <div className="embedWrap">
            <iframe
              title="Google Maps"
              className="embed map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(COMPANY.mapsQuery)}&output=embed`}
            />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footerInner">
          <div>
            <div className="footerTitle">{COMPANY.brandName}</div>
            <div className="footerSub">
              <a href={`tel:${COMPANY.phone.replace(/\s+/g,"")}`}>{COMPANY.phone}</a> •{" "}
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </div>
            <div className="footerSub">{COMPANY.storeAddress}</div>
          </div>

          <div className="footerLinks">
            <a href={COMPANY.orderUrl} target="_blank" rel="noreferrer">Menü / rendelés</a>
            <a href={COMPANY.facebookUrl} target="_blank" rel="noreferrer">Facebook</a>
            <a href={COMPANY.instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>

        <div className="footerBottom">
          © {new Date().getFullYear()} {COMPANY.companyName}
        </div>
      </footer>
    </div>
  );
}
