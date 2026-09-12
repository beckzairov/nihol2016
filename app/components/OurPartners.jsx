"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { FiArrowUpRight, FiChevronDown, FiGlobe } from "react-icons/fi";
import { partners } from "../content/site";
import useSiteCopy from "../hooks/useSiteCopy";
export default function OurPartners() {
  const copy = useSiteCopy();
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(null);
  const active = partners[selected];
  return (
    <section id="partners" className="section-space partners-section">
      <div className="section-shell">
        <p className="eyebrow">{copy.partnerEyebrow}</p>
        <div className="section-heading">
          <h2>{copy.partnerTitle}</h2>
          <p>{copy.partnerIntro}</p>
        </div>
        <div className="partner-accordion partner-list">
          {partners.map((partner, index) => (
            <div className="partner-accordion-item" key={partner.key}>
              <h3>
                <button
                  type="button"
                  id={`partner-trigger-${index}`}
                  aria-expanded={expanded === index}
                  aria-controls={`partner-panel-${index}`}
                  onClick={() => setExpanded(expanded === index ? null : index)}
                >
                  <span className="partner-number">{String(index + 1).padStart(2, "0")}</span>
                  {partner.name}
                  <FiChevronDown aria-hidden="true" />
                </button>
              </h3>
              <div
                id={`partner-panel-${index}`}
                role="region"
                aria-labelledby={`partner-trigger-${index}`}
                hidden={expanded !== index}
              >
                <article className="partner-detail">
                  <PartnerContent partner={partner} />
                </article>
              </div>
            </div>
          ))}
        </div>
        <div className="partner-explorer">
          <div className="partner-list" role="group" aria-label={copy.partners}>
            {partners.map((partner, index) => (
              <button
                type="button"
                key={partner.name}
                aria-pressed={selected === index}
                onClick={() => setSelected(index)}
              >
                <span className="partner-number">{String(index + 1).padStart(2, "0")}</span>
                {partner.name}
                <FiArrowUpRight />
              </button>
            ))}
          </div>
          <article className="partner-detail" aria-live="polite">
            <PartnerContent partner={active} />
            <span className="partner-pagination">
              {String(selected + 1).padStart(2, "0")} <span>/ {String(partners.length).padStart(2, "0")}</span>
            </span>
          </article>
        </div>
      </div>
    </section>
  );
}

function PartnerContent({ partner }) {
  const { t } = useTranslation();

  return (
    <>
      <span className="eyebrow">NIHOL × {partner.name.toUpperCase()}</span>
      {partner.logo ? (
        <Image src={partner.logo} alt={partner.name} width={230} height={115} />
      ) : (
        <span className="partner-wordmark">{partner.name}</span>
      )}
      {t(`our_partners.${partner.key}`).split("\n\n").map((paragraph, index) => (
        <p key={`${partner.key}-${index}`}>{paragraph}</p>
      ))}
      <a
        className="partner-website"
        href={partner.website}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("our_partners.visit_website", { brand: partner.name })}
      >
        <FiGlobe aria-hidden="true" />
        <span>{new URL(partner.website).hostname.replace(/^www\./, "")}</span>
        <span className="partner-website-arrow"><FiArrowUpRight aria-hidden="true" /></span>
      </a>
    </>
  );
}
