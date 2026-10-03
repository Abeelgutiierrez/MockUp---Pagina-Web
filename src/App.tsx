import { useEffect, useRef, useState } from "react";
import {
  Link,
  Outlet,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import {
  categories,
  genders,
  materials,
  productImage,
  ProductItem,
} from "./data/products";
import { contact, navigation, process, services } from "./data/siteContent";
import { images } from "./data/images";
import {
  allCatalogItems,
  catalog,
  findCategory,
  findDivision,
  specialized,
} from "./data/catalog";

const Arrow = () => <ArrowRight size={18} strokeWidth={1.6} />;
const BrandLogo = ({ footer = false }: { footer?: boolean }) => (
  <img
    className={`brand-logo ${footer ? "footer-logo" : ""}`}
    src={images.branding.logo}
    alt="Fashion Texa"
  />
);

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}
function Seo({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
  }, [title, description]);
  return null;
}

function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [products, setProducts] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setMobile(false);
    setProducts(false);
  }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);
  return (
    <header className={`nav-shell minimal-nav ${mobile ? "menu-open" : ""}`}>
      <Link to="/" className="brand-link">
        <BrandLogo />
      </Link>
      <button
        className="menu-button"
        aria-label={mobile ? "Close menu" : "Open menu"}
        onClick={() => setMobile((v) => !v)}
      >
        <span>{mobile ? "Close" : "Menu"}</span>
        {mobile ? <X /> : <Menu />}
      </button>
      {mobile && (
        <div className="fullscreen-menu">
          <div className="menu-primary">
            <button onClick={() => setProducts((open) => !open)}>
              Products <ChevronDown className={products ? "rotated" : ""} />
            </button>
            <Link to="/capabilities">
              Capabilities <Arrow />
            </Link>
            <Link to="/sustainability">
              Sustainability <Arrow />
            </Link>
            <Link to="/company">
              Company <Arrow />
            </Link>
            <Link to="/contact">
              Contact <Arrow />
            </Link>
          </div>
          <div className={`menu-products ${products ? "expanded" : ""}`}>
            {catalog.map((division) => (
              <div key={division.slug}>
                <Link to={`/products/${division.slug}`}>
                  <b>{division.name}</b>
                </Link>
                {division.categories.map((category) => (
                  <Link
                    key={category.slug}
                    to={`/products/${division.slug}/${category.slug}`}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            ))}
            <div>
              <Link to="/products">
                <b>Specialized</b>
              </Link>
              <Link to="/products/specialized/socks">Socks</Link>
              <Link to="/products/specialized/technical">
                Workwear / Technical
              </Link>
            </div>
          </div>
          <div className="menu-foot">
            <span>Apparel sourcing · Dhaka, Bangladesh</span>
            <Link to="/contact">
              Start a conversation <Arrow />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-lead">
        <div>
          <span className="eyebrow">FASHION TEXA · DHAKA</span>
          <h2>
            From brief to
            <br />
            final shipment.
          </h2>
        </div>
        <Link className="circle-link" to="/contact">
          <Arrow />
        </Link>
      </div>
      <div className="footer-grid">
        <BrandLogo footer />
        <div>
          <b>Explore</b>
          {navigation.map((n) => (
            <Link key={n.to} to={n.to}>
              {n.label}
            </Link>
          ))}
        </div>
        <div>
          <b>Contact</b>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={`tel:${contact.phone}`}>{contact.phone}</a>
        </div>
        <div>
          <b>Studio</b>
          {contact.address.map((a) => (
            <span key={a}>{a}</span>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 Fashion Texa <span>Website concept · Client review</span>
      </div>
    </footer>
  );
}
function Layout() {
  return (
    <>
      <ScrollTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function Button({
  to,
  children,
  light = false,
}: {
  to: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link className={`button ${light ? "light" : ""}`} to={to}>
      {children}
      <Arrow />
    </Link>
  );
}
function SectionHead({
  eyebrow,
  title,
  link,
}: {
  eyebrow: string;
  title: string;
  link?: { label: string; to: string };
}) {
  return (
    <div className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {link && (
        <Link className="text-link" to={link.to}>
          {link.label}
          <Arrow />
        </Link>
      )}
    </div>
  );
}
function PageHero({
  eyebrow,
  title,
  subtitle,
  image = images.products.overview,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image?: string;
  compact?: boolean;
}) {
  return (
    <section className={`page-hero ${compact ? "compact" : ""}`}>
      <img src={image} />
      <div className="page-hero-shade" />
      <div className="page-hero-content">
        <span className="eyebrow light-text">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}
function CTA({
  title = "Bring your next collection into focus.",
  body = "Share your product direction, target market and timing. We’ll start with the right questions.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="cta-section">
      <span className="eyebrow">START A CONVERSATION</span>
      <h2>{title}</h2>
      <p>{body}</p>
      <Button to="/contact" light>
        Start a project
      </Button>
    </section>
  );
}

const capabilityImages = [
  images.capabilities.development,
  images.capabilities.sourcing,
  images.capabilities.merchandising,
  images.capabilities.supplier,
  images.capabilities.production,
  images.capabilities.qualityControl,
  images.capabilities.shipping,
];

type StickyVisualItem = {
  id: string;
  title: string;
  description?: string;
  image: string;
  to?: string;
  group?: string;
};

function StickyVisualList({
  items,
  eyebrow,
  title,
  className = "",
  dark = false,
}: {
  items: StickyVisualItem[];
  eyebrow?: string;
  title?: string;
  className?: string;
  dark?: boolean;
}) {
  const [active, setActive] = useState(0);
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const nodes = root.current?.querySelectorAll("[data-sticky-step]");
    if (!nodes?.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActive(Number((visible.target as HTMLElement).dataset.stickyStep));
        }
      },
      { rootMargin: "-40% 0px -40%", threshold: [0, 0.25, 0.6] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [items.length]);
  return (
    <section
      ref={root}
      className={`sticky-visual-list ${dark ? "dark" : ""} ${className}`}
    >
      {(eyebrow || title) && (
        <div className="sticky-list-heading">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {title && <h2>{title}</h2>}
        </div>
      )}
      <div className="sticky-list-preview" aria-live="polite">
        {items.map((item, index) => (
          <img
            key={item.id}
            className={active === index ? "active" : ""}
            src={item.image}
            alt=""
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}
        <div>
          <span>{items[active]?.id}</span>
          <p>{items[active]?.title}</p>
        </div>
      </div>
      <div className="sticky-list-items">
        {items.map((item, index) => {
          const copy = (
            <>
              <img
                className="sticky-list-mobile-image"
                src={item.image}
                alt=""
                loading="lazy"
              />
              {item.group && <small>{item.group}</small>}
              <span>{item.id}</span>
              <h3>{item.title}</h3>
              {item.description && <p>{item.description}</p>}
              <Arrow />
            </>
          );
          const common = {
            "data-sticky-step": index,
            className: active === index ? "active" : "",
            onMouseEnter: () => setActive(index),
            onFocus: () => setActive(index),
          };
          return item.to ? (
            <Link key={item.id} {...common} to={item.to}>
              {copy}
            </Link>
          ) : (
            <button
              key={item.id}
              {...common}
              onClick={() => setActive(index)}
              type="button"
            >
              {copy}
            </button>
          );
        })}
      </div>
    </section>
  );
}

function CapabilityStory({ compact = false }: { compact?: boolean }) {
  const list = compact ? services.slice(0, 4) : services;
  return (
    <StickyVisualList
      className={`capability-story ${compact ? "compact" : ""}`}
      items={list.map((service, index) => ({
        id: service[0],
        title: service[1],
        description: service[2],
        image: capabilityImages[index],
      }))}
    />
  );
}

const materialImages: Record<string, string> = {
  Cotton: images.materials.fabrications.cotton,
  CVC: images.materials.fabrications.blends,
  Viscose: images.materials.fabrications.poplin,
  Linen: images.materials.fabrications.canvas,
  Denim: images.materials.fabrications.denim,
  Fleece: images.materials.fleece,
  Jersey: images.materials.fabrications.dobby,
  Piqué: images.materials.fabrications.twill,
  "French Terry": images.materials.fabrications.corduroy,
  Twill: images.materials.fabrications.twill,
};

function MaterialExperience() {
  const list = materials.slice(0, 10);
  return (
    <StickyVisualList
      className="material-experience"
      eyebrow="MATERIAL DIRECTIONS"
      title="Texture, weight and handle shape every collection."
      items={list.map((material, index) => ({
        id: String(index + 1).padStart(2, "0"),
        title: material,
        image: materialImages[material] || images.materials.rolls,
      }))}
    />
  );
}

function PrinciplesStory() {
  const principles = [
    ["01", "Partnership over transaction", images.company.development],
    ["02", "Communication over assumption", images.company.team],
    ["03", "Quality through coordination", images.company.quality],
    ["04", "Decisions grounded in the brief", images.company.materials],
  ];
  const [active, setActive] = useState(0);
  return (
    <section className="principles-story">
      <div className="principles-visual">
        {principles.map((item, index) => (
          <img
            key={item[0]}
            src={item[2]}
            className={active === index ? "active" : ""}
            alt=""
            loading="lazy"
          />
        ))}
      </div>
      <div className="principles-copy">
        <span className="eyebrow">HOW WE WORK</span>
        <h2>A clear operating philosophy, seen in every handover.</h2>
        {principles.map((item, index) => (
          <button
            key={item[0]}
            className={active === index ? "active" : ""}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
          >
            <span>{item[0]}</span>
            <strong>{item[1]}</strong>
            <Arrow />
          </button>
        ))}
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Seo
        title="Fashion Texa — Global Apparel Sourcing"
        description="Apparel sourcing and buying services from Dhaka, Bangladesh."
      />
      <section className="home-hero">
        <video
          className="hero-media"
          autoPlay
          muted
          loop
          playsInline
          poster={images.home.hero}
          aria-label="Garment manufacturing in progress"
        >
          <source src={images.home.heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="eyebrow light-text">
            APPAREL SOURCING · BANGLADESH
          </span>
          <h1>
            Apparel sourcing and production.
            <br />
            <em>Built around your collection.</em>
          </h1>
          <p>
            Fashion Texa supports global buyers with product development,
            supplier coordination, production management, quality follow-up and
            shipment support.
          </p>
          <div className="button-row">
            <Button to="/capabilities" light>
              Explore capabilities
            </Button>
            <Link className="text-link light-text" to="/products">
              Discover our products <Arrow />
            </Link>
          </div>
        </div>
        <div className="hero-index">
          01 <span /> 05
        </div>
      </section>
      <section className="intro-grid section">
        <span className="eyebrow">WHO WE ARE</span>
        <div>
          <h2>A sourcing partner for the complete apparel journey.</h2>
          <p>
            Fashion Texa supports retailers, importers, wholesalers and fashion
            brands with product development, merchandising, production
            management, quality control, supplier coordination, shipping and
            export documentation.
          </p>
          <Link className="text-link" to="/company">
            Discover Fashion Texa <Arrow />
          </Link>
        </div>
      </section>
      <section className="dark-section range">
        <SectionHead
          eyebrow="OUR PRODUCT WORLD"
          title="Men. Women. Boys. Girls. One connected portfolio."
          link={{ label: "View all products", to: "/products" }}
        />
        <div className="range-grid">
          {catalog.map((g, i) => (
            <Link
              to={`/products/${g.slug}`}
              className={`range-card card-${i}`}
              key={g.slug}
            >
              <img src={g.image} loading="lazy" />
              <span>0{i + 1}</span>
              <div>
                <h3>{g.name.toUpperCase()}</h3>
                <p>
                  {g.categories
                    .slice(0, 4)
                    .map((c) => c.name)
                    .join(" · ")}
                </p>
                <Arrow />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="section capability-preview">
        <SectionHead
          eyebrow="CONNECTED CAPABILITIES"
          title="One continuous line of coordination."
          link={{ label: "Explore capabilities", to: "/capabilities" }}
        />
        <CapabilityStory compact />
      </section>
      <section className="split-feature">
        <img src={images.capabilities.quality} />
        <div>
          <span className="eyebrow light-text">QUALITY-LED SOURCING</span>
          <h2>Attention where it matters.</h2>
          <p>
            Clear specifications, product follow-up and communication help keep
            each collection aligned from development through shipment.
          </p>
          <Button to="/capabilities" light>
            See how we work
          </Button>
        </div>
      </section>
      <MaterialExperience />
      <CTA />
    </>
  );
}

function Company() {
  return (
    <>
      <Seo
        title="Company — Fashion Texa"
        description="Meet Fashion Texa, an apparel sourcing and buying partner in Dhaka."
      />
      <PageHero
        eyebrow="COMPANY"
        title="A sourcing partner built around long-term relationships."
        subtitle="Clear communication. Coordinated execution. A practical understanding of the apparel supply chain."
        image={images.company.hero}
      />
      <section className="section editorial">
        <span className="big-number">01</span>
        <div>
          <span className="eyebrow">WHO WE ARE</span>
          <h2>
            Local coordination.
            <br />
            International perspective.
          </h2>
        </div>
        <div>
          <p className="lead">
            Fashion Texa is an apparel sourcing and buying partner serving
            fashion brands, retailers, importers and wholesalers.
          </p>
          <p>
            Its role spans the full sourcing journey: translating briefs,
            coordinating suppliers, following production, supporting quality
            control and helping orders move towards final shipment.
          </p>
        </div>
      </section>
      <section className="manifesto">
        <p>
          “Good sourcing is the discipline of keeping product, people and timing
          aligned.”
        </p>
      </section>
      <section className="company-image-band">
        <img
          src={images.company.materials}
          alt="Textile materials selected for product development"
          loading="lazy"
        />
        <div>
          <span className="eyebrow light-text">WHO WE ARE / HOW WE WORK</span>
          <h2>
            Product thinking, supplier coordination and production
            follow-up—connected.
          </h2>
        </div>
      </section>
      <PrinciplesStory />
      <CTA title="Build the next chapter with Fashion Texa." />
    </>
  );
}

function Capabilities() {
  return (
    <>
      <Seo
        title="Capabilities — Fashion Texa"
        description="Apparel development, merchandising, production and quality coordination."
      />
      <PageHero
        eyebrow="CAPABILITIES"
        title="From first brief to final shipment."
        subtitle="A connected sourcing process designed to keep product development, production and communication moving together."
        image={images.capabilities.hero}
      />
      <section className="section process">
        <SectionHead
          eyebrow="OUR PROCESS"
          title="Six connected stages. One clear line of sight."
        />
        <div className="process-line">
          {process.map((p, i) => (
            <div key={p}>
              <span>0{i + 1}</span>
              <h3>{p}</h3>
            </div>
          ))}
        </div>
      </section>
      <section className="dark-section capability-section">
        <div className="capability-title">
          <span className="eyebrow">CORE SERVICES</span>
          <h2>Support shaped around the product brief.</h2>
        </div>
        <CapabilityStory />
      </section>
      <section className="section note-block">
        <span className="eyebrow">SCOPE NOTE</span>
        <h2>
          Specific production capacities and facility credentials will be added
          after client validation.
        </h2>
        <p>
          The concept intentionally avoids unverified claims while showing how
          approved information can later be presented.
        </p>
      </section>
      <CTA />
    </>
  );
}

function ProductExplorer() {
  const [division, setDivision] = useState("all");
  const [query, setQuery] = useState("");
  const tabs = [
    ["all", "All"],
    ...catalog.map((d) => [d.slug, d.name]),
    ["specialized", "Technical"],
  ];
  const visible = allCatalogItems
    .filter(
      (item) =>
        (division === "all" || item.division === division) &&
        (item.name + " " + item.products.join(" "))
          .toLowerCase()
          .includes(query.toLowerCase()),
    )
    .slice(0, 12);
  return (
    <section className="section explorer">
      <SectionHead
        eyebrow="PRODUCT EXPLORER"
        title="Move from collection to category."
      />
      <div className="explorer-tools">
        <div className="filter-tabs">
          {tabs.map(([id, label]) => (
            <button
              className={division === id ? "selected" : ""}
              onClick={() => setDivision(id)}
              key={id}
            >
              {label}
            </button>
          ))}
        </div>
        <input
          aria-label="Search product type"
          placeholder="Search product type…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="explorer-grid">
        {visible.map((item, i) => (
          <Link
            className={`explorer-card size-${i % 5}`}
            key={`${item.division}-${item.slug}`}
            to={
              item.division === "specialized"
                ? `/products/specialized/${item.slug}`
                : `/products/${item.division}/${item.slug}`
            }
          >
            <img loading="lazy" src={item.gallery[1] || item.image} />
            <span>{item.divisionName}</span>
            <div>
              <h3>{item.name}</h3>
              <p>{item.products.slice(0, 4).join(" · ")}</p>
              <Arrow />
            </div>
          </Link>
        ))}
      </div>
      {visible.length === 0 && (
        <p className="empty-state">
          No matching product families. Try “hoodie”, “dress” or “jacket”.
        </p>
      )}
    </section>
  );
}

function Products() {
  return (
    <>
      <Seo
        title="Apparel Products — Fashion Texa"
        description="Explore menswear, womenswear and childrenswear sourcing categories."
      />
      <PageHero
        eyebrow="PRODUCTS"
        title="Designed around your collection."
        subtitle="Explore apparel sourcing directions across men, women, boys, girls and specialized product families."
        image={images.products.overview}
      />
      <section className="portfolio-divisions">
        {catalog.map((g, i) => (
          <Link
            to={`/products/${g.slug}`}
            key={g.slug}
            className={`division-card division-${i}`}
          >
            <img src={g.image} loading="lazy" />
            <span>0{i + 1}</span>
            <div>
              <h2>{g.name.toUpperCase()}</h2>
              <p>{g.categories.map((c) => c.name).join(" · ")}</p>
              <b>
                Explore <Arrow />
              </b>
            </div>
          </Link>
        ))}
      </section>
      <ProductExplorer />
      <MaterialExperience />
      <CTA title="Discuss your next collection." />
    </>
  );
}

function GenderPage() {
  const { gender } = useParams();
  const division = findDivision(gender) || findDivision("men")!;
  return (
    <>
      <Seo
        title={`${division.name} Apparel Sourcing — Fashion Texa`}
        description={division.description}
      />
      <PageHero
        eyebrow={`PRODUCTS / ${division.eyebrow}`}
        title={division.name.toUpperCase()}
        subtitle={division.description}
        image={division.image}
      />
      <section className="section gender-intro">
        <span className="eyebrow">CATEGORY DIRECTION</span>
        <h2>
          Six clear product families. One scalable collection architecture.
        </h2>
      </section>
      <section className="gender-grid">
        {division.categories.map((c, i) => (
          <ProductCard
            item={{
              name: c.name,
              meta: c.products.slice(0, 4).join(" · "),
              image: c.image,
              to: `/products/${division.slug}/${c.slug}`,
            }}
            index={i}
            gender={division.slug}
            key={c.name}
          />
        ))}
      </section>
      <CTA />
    </>
  );
}
function ProductCard({
  item,
  index,
  gender,
}: {
  item: ProductItem;
  index: number;
  gender: string;
}) {
  return (
    <Link className="product-card" to={item.to || `/products/${gender}`}>
      <div>
        <img
          src={item.image || productImage}
          loading="lazy"
          style={{ objectPosition: item.position || "center" }}
        />
        <span>0{index + 1}</span>
      </div>
      <h3>{item.name}</h3>
      <p>{item.meta}</p>
      <Arrow />
    </Link>
  );
}

function Breadcrumb({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav className="breadcrumb">
      {items.map((x, i) => (
        <span key={x.label}>
          {x.to ? <Link to={x.to}>{x.label}</Link> : x.label}
          {i < items.length - 1 && " / "}
        </span>
      ))}
    </nav>
  );
}

function ProductFamilyIndex({
  products,
  primaryImage,
  gender,
}: {
  products: string[];
  primaryImage: string;
  gender?: string;
}) {
  const visuals = [
    primaryImage,
    images.products.families.cardigan,
    images.products.families.tankTop,
    images.products.families.hooded,
    images.products.real.men["woven-tops"],
    images.products.real.women.jackets,
    images.products.real.boys["knit-tops"],
    images.products.families.accessories,
  ];
  return (
    <StickyVisualList
      className="family-experience"
      eyebrow="PRODUCT FAMILIES"
      title="A flexible family of collection directions."
      items={products.map((product, index) => ({
        id: String(index + 1).padStart(2, "0"),
        title: product,
        image: visuals[index % visuals.length],
        to:
          product === "T-Shirts" && gender === "men"
            ? "/products/men/knit-tops/t-shirts"
            : "/contact",
      }))}
    />
  );
}

const textureImages: Record<string, string> = {
  Twill: images.materials.fabrications.twill,
  Canvas: images.materials.fabrications.canvas,
  Poplin: images.materials.fabrications.poplin,
  Dobby: images.materials.fabrications.dobby,
  Cotton: images.materials.fabrications.cotton,
  Denim: images.materials.fabrications.denim,
  Corduroy: images.materials.fabrications.corduroy,
  Blends: images.materials.fabrications.blends,
};

function FabricationExperience({
  fabrications,
  materials: materialOptions,
}: {
  fabrications: string[];
  materials: string[];
}) {
  const combined = [
    ...fabrications.map((title) => ({ title, group: "FABRICATIONS" })),
    ...materialOptions.map((title) => ({ title, group: "MATERIAL OPTIONS" })),
  ];
  return (
    <StickyVisualList
      className="fabrication-experience"
      dark
      eyebrow="TEXTILE SPECIFICATION"
      title="A closer look at construction and material direction."
      items={combined.map((item, index) => ({
        id: String(index + 1).padStart(2, "0"),
        title: item.title,
        group: item.group,
        image:
          textureImages[item.title] ||
          Object.values(textureImages)[
            index % Object.values(textureImages).length
          ],
      }))}
    />
  );
}

function CategoryPage() {
  const { gender, category } = useParams();
  const division = findDivision(gender);
  const catalogCategory =
    gender === "specialized"
      ? specialized.find((c) => c.slug === category)
      : findCategory(gender, category);
  if (catalogCategory) {
    const divisionName = division?.name || "Specialized";
    const siblingCategories = division?.categories || specialized;
    return (
      <>
        <Seo
          title={`${divisionName} ${catalogCategory.name} — Fashion Texa`}
          description={catalogCategory.description}
        />
        <div
          className="category-hero catalog-category-hero immersive-category"
          style={{ backgroundImage: `url(${catalogCategory.image})` }}
        >
          <Breadcrumb
            items={[
              { label: "Products", to: "/products" },
              {
                label: divisionName,
                to: division ? `/products/${division.slug}` : "/products",
              },
              { label: catalogCategory.name },
            ]}
          />
          <span className="eyebrow">
            {divisionName.toUpperCase()} / {catalogCategory.name.toUpperCase()}
          </span>
          <h1>
            {catalogCategory.name}.<span>Built around the brief.</span>
          </h1>
          <p>{catalogCategory.description}</p>
        </div>
        <nav className="context-nav">
          <b>{divisionName}</b>
          {siblingCategories.map((c) => (
            <Link
              className={c.slug === category ? "active" : ""}
              key={c.slug}
              to={`/products/${gender}/${c.slug}`}
            >
              {c.name}
            </Link>
          ))}
        </nav>
        <section className="catalog-hero-image">
          <img
            src={catalogCategory.gallery[1] || catalogCategory.image}
            loading="lazy"
          />
        </section>
        <ProductFamilyIndex
          products={catalogCategory.products}
          primaryImage={catalogCategory.image}
          gender={gender}
        />
        <FabricationExperience
          fabrications={catalogCategory.fabrications}
          materials={catalogCategory.materials}
        />
        <CTA title="Start a sourcing conversation." />
      </>
    );
  }
  const key = `${gender}/${category}` as keyof typeof categories;
  const d = categories[key] || categories["men/circular-knits"];
  return (
    <>
      <Seo
        title={`${d.eyebrow.replace(" / ", " — ")} — Fashion Texa`}
        description={d.intro}
      />
      <div className="category-hero">
        <Breadcrumb
          items={[
            { label: "Products", to: "/products" },
            {
              label: gender === "women" ? "Women" : "Men",
              to: `/products/${gender}`,
            },
            { label: d.eyebrow.split(" / ")[1] },
          ]}
        />
        <span className="eyebrow">{d.eyebrow}</span>
        <h1>
          {d.title.split("\n").map((x) => (
            <span key={x}>{x}</span>
          ))}
        </h1>
        <p>{d.intro}</p>
      </div>
      <section className="category-gallery">
        <div className="gallery-lead">
          <img src={d.heroImage} />
        </div>
        {d.items.map((item, i) => (
          <ProductCard
            key={item.name}
            item={item}
            index={i}
            gender={gender || "men"}
          />
        ))}
      </section>
      <section className="section fabric-options">
        <SectionHead
          eyebrow="FABRIC OPTIONS"
          title="Material directions from the current Fashion Texa range."
        />
        <div>
          {d.fabrics.map((f) => (
            <span key={f}>{f}</span>
          ))}
        </div>
        <p className="validation-note">
          Final material availability is subject to product brief and supplier
          validation.
        </p>
      </section>
      <CTA title="Develop your next collection with Fashion Texa." />
    </>
  );
}

function ProductDetail() {
  return (
    <>
      <Seo
        title="Men’s T-Shirts — Fashion Texa"
        description="Example capability presentation for men's T-shirt sourcing."
      />
      <section className="detail-hero">
        <div>
          <Breadcrumb
            items={[
              { label: "Products", to: "/products" },
              { label: "Men", to: "/products/men" },
              { label: "Knit Tops", to: "/products/men/knit-tops" },
              { label: "T-Shirts" },
            ]}
          />
          <span className="eyebrow">MEN / KNIT TOPS</span>
          <h1>
            MEN’S
            <br />
            T-SHIRTS
          </h1>
          <p>Flexible sourcing for everyday essentials.</p>
        </div>
        <img src={images.products.editorial.men["knit-tops"]} loading="eager" />
      </section>
      <section className="detail-spec">
        <div>
          <span className="eyebrow">EXAMPLE CAPABILITY PRESENTATION</span>
          <h2>A scalable product page designed for buyer conversations.</h2>
          <p>
            Available options shown below must be validated with Fashion Texa
            against the live brief, supplier and season.
          </p>
        </div>
        <div className="specs">
          {[
            [
              "Available constructions",
              "Single Jersey",
              "Piqué",
              "Interlock",
              "Rib",
            ],
            [
              "Potential materials",
              "Cotton",
              "Organic cotton",
              "CVC",
              "Viscose blends",
            ],
            ["Fits", "Regular", "Relaxed", "Oversized"],
          ].map((x) => (
            <article key={x[0]}>
              <h3>{x[0]}</h3>
              {x.slice(1).map((v) => (
                <span key={v}>{v}</span>
              ))}
            </article>
          ))}
        </div>
      </section>
      <CTA
        title="Request product information."
        body="Tell us about your product, construction, volume direction and delivery window."
      />
    </>
  );
}

function Sustainability() {
  return (
    <>
      <Seo
        title="Responsible Sourcing — Fashion Texa"
        description="A framework for Fashion Texa's future responsible sourcing story."
      />
      <PageHero
        eyebrow="RESPONSIBLE SOURCING"
        title="Better sourcing starts with better decisions."
        subtitle="A future-facing framework for presenting verified policies, credentials and progress with clarity."
        image={images.sustainability.hero}
      />
      <section className="section sustainability-intro">
        <span className="eyebrow">A PRACTICAL APPROACH</span>
        <h2>
          Responsibility begins with visibility, communication and informed
          choices.
        </h2>
        <p>
          This concept creates space for Fashion Texa’s future sustainability
          story without presenting unverified certifications, targets or
          performance claims.
        </p>
      </section>
      <section className="pillars">
        {[
          [
            "01",
            "Responsible supplier relationships",
            "Build working relationships around shared expectations and clear communication.",
          ],
          [
            "02",
            "Production visibility",
            "Create a documented view of milestones, product status and follow-up.",
          ],
          [
            "03",
            "Quality-driven sourcing",
            "Work towards durable product decisions through specification and workmanship.",
          ],
          [
            "04",
            "Long-term partnerships",
            "Support consistent collaboration across brands, buyers and suppliers.",
          ],
        ].map((x) => (
          <article key={x[0]}>
            <span>{x[0]}</span>
            <h3>{x[1]}</h3>
            <p>{x[2]}</p>
          </article>
        ))}
      </section>
      <section className="dark-section future">
        <span className="eyebrow">FUTURE DISCLOSURES</span>
        <h2>Certifications, policies and environmental metrics.</h2>
        <p>
          Client information required. This area is prepared for verified
          certification logos, policy documents, material standards and
          measurable commitments when approved.
        </p>
      </section>
      <CTA />
    </>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <Seo
        title="Contact — Fashion Texa"
        description="Start an apparel sourcing conversation with Fashion Texa."
      />
      <section className="contact-visual-hero">
        <img src={images.contact.backdrop} alt="Garment quality inspection" />
        <div>
          <span className="eyebrow">LET’S WORK TOGETHER</span>
          <h1>
            Bring the brief.
            <br />
            We’ll shape the route.
          </h1>
          <p>
            Start with the product, market and timing. Fashion Texa will help
            structure the next sourcing conversation.
          </p>
        </div>
      </section>
      <section className="contact-grid contact-editorial">
        <div className="contact-info">
          <span className="eyebrow">CONTACT</span>
          <h2>{contact.name}</h2>
          <p className="contact-intro">
            A direct route to product development, supplier coordination and
            production follow-up from Dhaka.
          </p>
          {contact.address.map((a) => (
            <p key={a}>{a}</p>
          ))}
          <a href={`tel:${contact.phone}`}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
        {sent ? (
          <div className="contact-success" role="status">
            <span>INQUIRY READY</span>
            <h2>Thank you for starting the conversation.</h2>
            <p>
              This is a presentation demo. Backend delivery will be connected
              before launch.
            </p>
            <button type="button" onClick={() => setSent(false)}>
              Send another inquiry <Arrow />
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <label className="form-field">
              <span>Name</span>
              <input required name="name" />
            </label>
            <label className="form-field">
              <span>Company</span>
              <input required name="company" />
            </label>
            <label className="form-field">
              <span>Work email</span>
              <input required type="email" name="email" />
            </label>
            <label className="form-field">
              <span>Country</span>
              <input name="country" />
            </label>
            <label className="form-field">
              <span>Project type</span>
              <select name="type">
                <option>Product development</option>
                <option>Apparel sourcing</option>
                <option>Production enquiry</option>
                <option>Other</option>
              </select>
            </label>
            <label className="full form-field message-field">
              <span>Message</span>
              <textarea required rows={5} />
            </label>
            <button className="button" type="submit">
              Send inquiry <Arrow />
            </button>
          </form>
        )}
      </section>
    </>
  );
}

function NotFound() {
  return (
    <section className="not-found">
      <Seo
        title="Page Not Found — Fashion Texa"
        description="The requested page could not be found."
      />
      <span>404</span>
      <h1>
        This page hasn’t been
        <br />
        stitched together yet.
      </h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <Button to="/">Back home</Button>
    </section>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="company" element={<Company />} />
        <Route path="capabilities" element={<Capabilities />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:gender" element={<GenderPage />} />
        <Route path="products/:gender/:category" element={<CategoryPage />} />
        <Route
          path="products/men/circular-knits/t-shirts"
          element={<ProductDetail />}
        />
        <Route
          path="products/men/knit-tops/t-shirts"
          element={<ProductDetail />}
        />
        <Route path="sustainability" element={<Sustainability />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
