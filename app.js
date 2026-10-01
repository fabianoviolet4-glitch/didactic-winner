/**
 * VERITAS AI - Institutional Document Intelligence Engine
 * Interactive Client Controller
 */

// --- Dataset Definitions for the Interactive Showcase ---
const documentsData = {
  treasury: {
    id: "treasury",
    title: "US_Federal_Treasury_Macro_Report_2026.pdf",
    meta: "642 Pages • Security Level: CUI / SENSITIVE • SHA-256: 8f92a1...4b09",
    securityBadge: "FedRAMP High Enclave",
    pdfContent: {
      page: 42,
      totalPages: 642,
      docHeader: "OFFICE OF FINANCIAL STABILITY & SOVEREIGN RISK MANAGEMENT",
      section: "SECTION 4.2 — LIQUIDITY BUFFERS & COLLATERAL HAIRCUT THRESHOLDS",
      paragraphs: [
        {
          id: "p1",
          text: "4.2.1 Regulatory Reserve Baseline: Under extraordinary macro-prudential guidelines updated for fiscal 2026, Tier-1 systemic institutions must maintain unencumbered sovereign collateral exceeding ",
          highlight: "114.8% of daily net outflow stress vectors",
          highlightId: "cite-1",
          continuation: ". Any variance exceeding 150 basis points mandates immediate intervention by the Federal Monetary Oversight Committee."
        },
        {
          id: "p2",
          text: "4.2.2 Reverse Repo Facility Access: Primary broker-dealers identified under Schedule D (including ",
          redacted: "J.P. Morgan Securities LLC & Sovereign Asset Trust",
          textAfterRedact: ") are granted conditional facility caps pegged at ",
          highlight: "$45.0 Billion USD per operational liquidity window",
          highlightId: "cite-2",
          continuation: ", subject to automated audit feeds."
        },
        {
          id: "p3",
          text: "4.2.3 Emergency Cross-Currency Swap Adjustments: Collateral haircuts applied to G10 sovereign issuances shall not diverge by more than ",
          highlight: "0.45% from Bank for International Settlements (BIS) Tri-Party benchmarks",
          highlightId: "cite-3",
          continuation: " during periods of elevated volatility index (VIX > 28.5)."
        }
      ]
    },
    sampleQueries: [
      {
        question: "Extract sovereign collateral thresholds and mandatory intervention triggers from Section 4.2",
        response: {
          summary: "According to Section 4.2.1 of the 2026 Macro-Prudential Framework, Tier-1 institutions must satisfy strict sovereign liquidity ratios:",
          points: [
            {
              text: "Unencumbered sovereign collateral must exceed 114.8% of daily net outflow stress vectors.",
              citation: "P.42 §4.2.1",
              citeId: "cite-1"
            },
            {
              text: "Immediate Federal Monetary Oversight Committee intervention is triggered if variance breaches 150 bps.",
              citation: "P.42 §4.2.1",
              citeId: "cite-1"
            },
            {
              text: "Conditional primary broker repo access is capped at $45.0B per liquidity window with real-time audit telemetry.",
              citation: "P.42 §4.2.2",
              citeId: "cite-2"
            }
          ],
          confidence: "99.98%",
          latency: "340ms",
          shaHash: "sha256:d83e2981fae019c"
        }
      },
      {
        question: "What are the cross-currency swap haircut limitations during high market volatility?",
        response: {
          summary: "Cross-currency swap haircuts are strictly bounded to prevent disorderly sovereign deleveraging:",
          points: [
            {
              text: "Haircuts on G10 sovereign issuances cannot deviate by more than 0.45% from BIS Tri-Party benchmarks.",
              citation: "P.42 §4.2.3",
              citeId: "cite-3"
            },
            {
              text: "Trigger threshold is locked to VIX readings exceeding 28.5 sustained across two market closes.",
              citation: "P.42 §4.2.3",
              citeId: "cite-3"
            }
          ],
          confidence: "99.94%",
          latency: "285ms",
          shaHash: "sha256:77bc0928aa1ef29"
        }
      }
    ]
  },

  merger: {
    id: "merger",
    title: "CrossBorder_MA_Antitrust_Covenants_v4.2.pdf",
    meta: "380 Pages • Security Level: PRIVILEGED / CONFIDENTIAL • SHA-256: c3b91a...7e21",
    securityBadge: "Restricted Client Privileged",
    pdfContent: {
      page: 118,
      totalPages: 380,
      docHeader: "EXECUTION DRAFT — CONFIDENTIAL ACQUISITION AGREEMENT",
      section: "ARTICLE 8.3 — REGULATORY DIVESTITURE COVENANTS & REVERSE TERMINATION",
      paragraphs: [
        {
          id: "p1",
          text: "8.3.1 Required Divestitures: The Buyer agrees to take all requisite actions to secure FTC and European Commission clearance, provided that Buyer shall not be required to divest assets generating consolidated revenue in excess of ",
          highlight: "€280,000,000 during the preceding fiscal year",
          highlightId: "cite-1",
          continuation: " (the 'Divestiture Ceiling')."
        },
        {
          id: "p2",
          text: "8.3.2 Reverse Termination Fee: In the event of a final, non-appealable injunction issued by any antitrust regulatory authority prior to the Long Stop Date of November 30, 2026, Buyer shall remit to Target an irrevocable fee of ",
          highlight: "$1,450,000,000 USD via wire transfer within 3 business days",
          highlightId: "cite-2",
          continuation: ", payable to designated escrow account #"
        },
        {
          id: "p3",
          text: "8.3.3 Material Adverse Change Carve-outs: Changes in broad macroeconomic indices, interest rates, or geopolitical trade tariffs shall not constitute a Material Adverse Effect under Section 1.1 unless ",
          highlight: "disproportionately impacting the Target relative to peers by > 25%",
          highlightId: "cite-3",
          continuation: "."
        }
      ]
    },
    sampleQueries: [
      {
        question: "What is the maximum divestiture ceiling the Buyer is obligated to accept for antitrust clearance?",
        response: {
          summary: "Under Article 8.3.1, the antitrust remedy obligations of the Buyer are capped by a defined monetary threshold:",
          points: [
            {
              text: "The Buyer's divestiture covenant is strictly limited to assets generating no more than €280M in previous fiscal year revenue.",
              citation: "P.118 §8.3.1",
              citeId: "cite-1"
            },
            {
              text: "Any regulatory remedy requiring asset sales beyond €280M can be rejected by Buyer without breach of good-faith covenant.",
              citation: "P.118 §8.3.1",
              citeId: "cite-1"
            }
          ],
          confidence: "99.99%",
          latency: "310ms",
          shaHash: "sha256:1a84f3e9bc019a2"
        }
      },
      {
        question: "What is the reverse break-up fee and under what timeline must it be wired?",
        response: {
          summary: "Article 8.3.2 specifies the exact terms for the Reverse Termination Fee:",
          points: [
            {
              text: "Irrevocable penalty fee of $1.450 Billion USD if antitrust clearance is enjoined prior to November 30, 2026.",
              citation: "P.118 §8.3.2",
              citeId: "cite-2"
            },
            {
              text: "Wire transfer must be completed within exactly 3 business days to designated escrow.",
              citation: "P.118 §8.3.2",
              citeId: "cite-2"
            }
          ],
          confidence: "100.0%",
          latency: "295ms",
          shaHash: "sha256:fe8910dca47120a"
        }
      }
    ]
  },

  defense: {
    id: "defense",
    title: "National_Defense_Infrastructure_Procurement_Audit.pdf",
    meta: "1,240 Pages • Security Level: CLASSIFIED COMPARTMENTED • SHA-256: 44e09f...b55a",
    securityBadge: "Sovereign Air-Gap Verified",
    pdfContent: {
      page: 304,
      totalPages: 1240,
      docHeader: "FEDERAL PROCUREMENT AUDIT & DEFENSE LOGISTICS OVERSIGHT",
      section: "CHAPTER XII — SUPPLY CHAIN SECURITY, AS9100 COMPLIANCE & CYBER RESILIENCE",
      paragraphs: [
        {
          id: "p1",
          text: "12.4.1 Micro-Electronic Provenance: All semi-conductor integrated circuits deployed in sub-surface guidance payloads must possess unbroken NIST SP 800-161 origin chain certification, prohibiting any fabrication within ",
          highlight: "unapproved foreign trade entities or Entity List jurisdictions",
          highlightId: "cite-1",
          continuation: "."
        },
        {
          id: "p2",
          text: "12.4.2 Zero-Day Penetration SLAs: Prime contractors are required under Clause 48 CFR 252.204-7012 to report confirmed cyber intrusion vectors into defense enclave networks within ",
          highlight: "less than 72 hours of initial anomaly detection",
          highlightId: "cite-2",
          continuation: ", accompanied by encrypted packet captures."
        },
        {
          id: "p3",
          text: "12.4.3 Spare Inventory Readiness Buffer: Defense logistics depots must maintain critical line-item spare assemblies sufficient for ",
          highlight: "270 consecutive operational days without resupply",
          highlightId: "cite-3",
          continuation: " in forward Pacific theaters."
        }
      ]
    },
    sampleQueries: [
      {
        question: "What is the mandatory reporting window for cyber intrusions under defense procurement guidelines?",
        response: {
          summary: "Per Section 12.4.2 governing cyber defense resilience and 48 CFR 252.204-7012 requirements:",
          points: [
            {
              text: "Contractors must submit formal incident reports within less than 72 hours of confirmed anomaly detection.",
              citation: "P.304 §12.4.2",
              citeId: "cite-2"
            },
            {
              text: "Submissions must include full forensic encrypted packet captures and remediation hashes.",
              citation: "P.304 §12.4.2",
              citeId: "cite-2"
            }
          ],
          confidence: "99.96%",
          latency: "410ms",
          shaHash: "sha256:99c27b01fa8820c"
        }
      }
    ]
  }
};

// --- State Variables ---
let currentDocKey = "treasury";
let isRedacted = false;
let isGenerating = false;
let currentZoom = 100;

// --- Initialize DOM on Load ---
document.addEventListener("DOMContentLoaded", () => {
  initShowcase();
  initCalculator();
  initIndustryTabs();
  initPricingToggle();
  initModal();
  initScrollEffects();
  initMobileMenu();
});

// --- Showcase Engine ---
function initShowcase() {
  const docButtons = document.querySelectorAll(".doc-tab-btn");
  docButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const docKey = btn.dataset.doc;
      if (docKey && docKey !== currentDocKey) {
        docButtons.forEach(b => {
          b.classList.remove("active", "border-cyan-500", "bg-cyan-500/10", "text-cyan-400");
          b.classList.add("border-slate-800", "text-slate-400");
        });
        btn.classList.add("active", "border-cyan-500", "bg-cyan-500/10", "text-cyan-400");
        btn.classList.remove("border-slate-800", "text-slate-400");
        currentDocKey = docKey;
        renderDocumentView(currentDocKey);
        loadDefaultQueryForDoc(currentDocKey);
      }
    });
  });

  // Redaction toggle
  const redactBtn = document.getElementById("toggle-redaction-btn");
  if (redactBtn) {
    redactBtn.addEventListener("click", () => {
      isRedacted = !isRedacted;
      const pdfWrapper = document.getElementById("pdf-viewer-wrapper");
      if (isRedacted) {
        pdfWrapper.classList.add("redaction-active");
        redactBtn.classList.add("bg-amber-500/20", "text-amber-300", "border-amber-500/50");
        redactBtn.innerHTML = `
          <svg class="w-4 h-4 mr-1.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"/></svg>
          Redaction Shield: Active
        `;
      } else {
        pdfWrapper.classList.remove("redaction-active");
        redactBtn.classList.remove("bg-amber-500/20", "text-amber-300", "border-amber-500/50");
        redactBtn.innerHTML = `
          <svg class="w-4 h-4 mr-1.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
          Sovereign Redaction Mode
        `;
      }
    });
  }

  // Zoom controls
  const zoomIn = document.getElementById("pdf-zoom-in");
  const zoomOut = document.getElementById("pdf-zoom-out");
  const zoomReset = document.getElementById("pdf-zoom-reset");
  const zoomText = document.getElementById("pdf-zoom-text");
  const sheet = document.getElementById("pdf-sheet-element");

  if (zoomIn && zoomOut && sheet) {
    zoomIn.addEventListener("click", () => {
      if (currentZoom < 140) {
        currentZoom += 10;
        sheet.style.transform = `scale(${currentZoom / 100})`;
        if (zoomText) zoomText.textContent = `${currentZoom}%`;
      }
    });
    zoomOut.addEventListener("click", () => {
      if (currentZoom > 80) {
        currentZoom -= 10;
        sheet.style.transform = `scale(${currentZoom / 100})`;
        if (zoomText) zoomText.textContent = `${currentZoom}%`;
      }
    });
    zoomReset.addEventListener("click", () => {
      currentZoom = 100;
      sheet.style.transform = "scale(1)";
      if (zoomText) zoomText.textContent = "100%";
    });
  }

  // Question Submission Input
  const queryForm = document.getElementById("demo-query-form");
  const queryInput = document.getElementById("demo-query-input");
  if (queryForm && queryInput) {
    queryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = queryInput.value.trim();
      if (!val || isGenerating) return;
      handleUserQuery(val);
      queryInput.value = "";
    });
  }

  // Initial render
  renderDocumentView(currentDocKey);
  loadDefaultQueryForDoc(currentDocKey);
}

function renderDocumentView(docKey) {
  const doc = documentsData[docKey];
  if (!doc) return;

  const headerTitle = document.getElementById("pdf-doc-title");
  const headerMeta = document.getElementById("pdf-doc-meta");
  const pageNum = document.getElementById("pdf-current-page");
  const totalPages = document.getElementById("pdf-total-pages");
  const docHeaderElem = document.getElementById("pdf-page-institution-header");
  const docSectionElem = document.getElementById("pdf-page-section-header");
  const paragraphsContainer = document.getElementById("pdf-paragraphs-container");

  if (headerTitle) headerTitle.textContent = doc.title;
  if (headerMeta) headerMeta.textContent = doc.meta;
  if (pageNum) pageNum.textContent = `PAGE ${doc.pdfContent.page}`;
  if (totalPages) totalPages.textContent = `OF ${doc.pdfContent.totalPages}`;
  if (docHeaderElem) docHeaderElem.textContent = doc.pdfContent.docHeader;
  if (docSectionElem) docSectionElem.textContent = doc.pdfContent.section;

  if (paragraphsContainer) {
    paragraphsContainer.innerHTML = "";
    doc.pdfContent.paragraphs.forEach(p => {
      const pElem = document.createElement("div");
      pElem.className = "text-slate-800 text-xs sm:text-[13px] leading-relaxed mb-4 font-serif text-justify relative group";
      
      let html = `<span>${p.text}</span>`;
      if (p.redacted) {
        html += `<span class="redacted-bar px-1 font-mono text-[11px] font-bold">[CLASSIFIED: ${p.redacted}]</span>`;
      }
      if (p.textAfterRedact) {
        html += `<span>${p.textAfterRedact}</span>`;
      }
      if (p.highlight) {
        html += `<mark id="${p.highlightId}" class="pdf-highlight cursor-pointer" title="Click to view citation source">${p.highlight}</mark>`;
      }
      if (p.continuation) {
        html += `<span>${p.continuation}</span>`;
      }

      pElem.innerHTML = html;
      paragraphsContainer.appendChild(pElem);
    });

    // Add click event to marks
    document.querySelectorAll(".pdf-highlight").forEach(m => {
      m.addEventListener("click", () => {
        highlightCitation(m.id);
      });
    });
  }

  // Render Prompt Suggestions
  const promptPillContainer = document.getElementById("suggested-prompts-container");
  if (promptPillContainer) {
    promptPillContainer.innerHTML = "";
    doc.sampleQueries.forEach((q, idx) => {
      const pill = document.createElement("button");
      pill.type = "button";
      pill.className = "text-left text-xs bg-slate-900/90 hover:bg-slate-800 border border-slate-700/70 hover:border-cyan-500/50 text-slate-300 hover:text-white px-3 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 group";
      pill.innerHTML = `
        <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform"></span>
        <span class="truncate">${q.question}</span>
      `;
      pill.addEventListener("click", () => {
        if (!isGenerating) {
          triggerSpecificQuery(q);
        }
      });
      promptPillContainer.appendChild(pill);
    });
  }
}

function loadDefaultQueryForDoc(docKey) {
  const doc = documentsData[docKey];
  if (!doc || !doc.sampleQueries.length) return;
  triggerSpecificQuery(doc.sampleQueries[0]);
}

function triggerSpecificQuery(queryObj) {
  const chatContainer = document.getElementById("copilot-messages-container");
  if (!chatContainer) return;

  isGenerating = true;
  chatContainer.innerHTML = "";

  // User Message
  const userMsg = document.createElement("div");
  userMsg.className = "flex items-start gap-3 justify-end";
  userMsg.innerHTML = `
    <div class="bg-cyan-950/60 border border-cyan-800/50 text-cyan-100 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%] text-xs sm:text-sm shadow-lg">
      <div class="font-semibold text-[11px] text-cyan-400 mb-1 flex items-center gap-1.5 justify-end">
        <span>Verified Institutional Analyst</span>
        <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
      </div>
      <p>${queryObj.question}</p>
    </div>
  `;
  chatContainer.appendChild(userMsg);

  // Assistant Streaming Placeholder
  const aiMsg = document.createElement("div");
  aiMsg.className = "flex items-start gap-3 justify-start";
  aiMsg.innerHTML = `
    <div class="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shrink-0 shadow-md">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
    </div>
    <div class="bg-slate-900/90 border border-slate-700/80 rounded-2xl rounded-tl-sm p-4 max-w-[90%] text-xs sm:text-sm text-slate-200 shadow-xl space-y-3">
      <div class="flex items-center justify-between border-b border-slate-800 pb-2 text-[11px] font-mono text-slate-400">
        <span class="flex items-center gap-1.5 text-emerald-400">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Attribution Verified (100% Deterministic)
        </span>
        <span class="text-slate-500">Latency: <span id="telemetry-latency" class="text-slate-300">${queryObj.response.latency}</span></span>
      </div>
      <p id="streaming-summary" class="text-slate-200 font-medium"></p>
      <div id="streaming-points" class="space-y-2"></div>
      <div class="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
        <span class="flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          Confidence: <strong class="text-cyan-300 font-semibold">${queryObj.response.confidence}</strong>
        </span>
        <span class="text-slate-500 truncate max-w-[150px]" title="${queryObj.response.shaHash}">${queryObj.response.shaHash}</span>
      </div>
    </div>
  `;
  chatContainer.appendChild(aiMsg);

  // Stream text effect
  const summaryElem = document.getElementById("streaming-summary");
  const pointsContainer = document.getElementById("streaming-points");

  let i = 0;
  const fullSummary = queryObj.response.summary;
  const summaryInterval = setInterval(() => {
    if (i <= fullSummary.length) {
      summaryElem.textContent = fullSummary.slice(0, i);
      i += 3;
    } else {
      clearInterval(summaryInterval);
      // Append points with citations
      queryObj.response.points.forEach((pt, pIdx) => {
        setTimeout(() => {
          const ptElem = document.createElement("div");
          ptElem.className = "flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80";
          ptElem.innerHTML = `
            <div class="mt-1 text-cyan-400 shrink-0">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </div>
            <div class="text-xs text-slate-300 flex-1">
              <span>${pt.text}</span>
              <button type="button" class="citation-badge ml-2" data-cite="${pt.citeId}">
                <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                ${pt.citation}
              </button>
            </div>
          `;
          pointsContainer.appendChild(ptElem);

          // Hook citation pill click
          const btn = ptElem.querySelector(".citation-badge");
          btn.addEventListener("click", () => {
            highlightCitation(pt.citeId);
          });

          // Highlight the first citation automatically
          if (pIdx === 0) {
            highlightCitation(pt.citeId);
          }
        }, pIdx * 180);
      });
      isGenerating = false;
    }
  }, 15);
}

function handleUserQuery(customQuestion) {
  const genericResponse = {
    question: customQuestion,
    response: {
      summary: `Verified synthesis executed across ${documentsData[currentDocKey].pdfContent.totalPages} pages in Sovereign Enclave US-GOV-EAST-1:`,
      points: [
        {
          text: `Semantic relevance vector located in Chapter 4 / Annex B matching criteria "${customQuestion.slice(0, 38)}...". All underlying calculations audited with zero residual hallucinations.`,
          citation: `P.${documentsData[currentDocKey].pdfContent.page} §Verified`,
          citeId: "cite-1"
        },
        {
          text: "Mathematical cross-check against consolidated balance sheets confirms alignment within nominal tolerance parameters (variance < 0.01%).",
          citation: `P.${documentsData[currentDocKey].pdfContent.page} §Audit`,
          citeId: "cite-2"
        }
      ],
      confidence: "99.97%",
      latency: "385ms",
      shaHash: "sha256:" + Math.random().toString(16).substr(2, 16)
    }
  };
  triggerSpecificQuery(genericResponse);
}

function highlightCitation(citeId) {
  document.querySelectorAll(".pdf-highlight").forEach(el => {
    el.classList.remove("active");
  });
  const target = document.getElementById(citeId);
  if (target) {
    target.classList.add("active");
    target.scrollIntoView({ behavior: "smooth", block: "center" });

    // Flash animation on the highlight
    target.style.transition = "box-shadow 0.2s ease, transform 0.2s ease";
    target.style.transform = "scale(1.02)";
    target.style.boxShadow = "0 0 18px rgba(56, 189, 248, 0.85)";
    setTimeout(() => {
      target.style.transform = "scale(1)";
      target.style.boxShadow = "0 0 10px rgba(56, 189, 248, 0.5)";
    }, 450);
  }
}

// --- Interactive ROI Calculator ---
function initCalculator() {
  const analystsInput = document.getElementById("calc-analysts");
  const pagesInput = document.getElementById("calc-pages");
  const docsInput = document.getElementById("calc-docs");

  const analystsVal = document.getElementById("calc-analysts-val");
  const pagesVal = document.getElementById("calc-pages-val");
  const docsVal = document.getElementById("calc-docs-val");

  const hoursResult = document.getElementById("calc-hours-saved");
  const costResult = document.getElementById("calc-cost-saved");
  const velocityResult = document.getElementById("calc-velocity");
  const riskResult = document.getElementById("calc-risk-mitigated");

  function updateCalculations() {
    const analysts = parseInt(analystsInput.value, 10);
    const pages = parseInt(pagesInput.value, 10);
    const docs = parseInt(docsInput.value, 10);

    if (analystsVal) analystsVal.textContent = analysts;
    if (pagesVal) pagesVal.textContent = pages.toLocaleString();
    if (docsVal) docsVal.textContent = docs.toLocaleString();

    // Standard institutional reading speed: ~30-40 pages/hour with full cross-referencing & citation checking
    // With Veritas AI: Instantaneous extraction + 10 mins spot verification
    const manualHoursPerDoc = Math.max(1, pages / 35);
    const aiHoursPerDoc = Math.max(0.15, manualHoursPerDoc * 0.08); // 92% speed improvement
    const savedHoursPerDoc = manualHoursPerDoc - aiHoursPerDoc;

    const totalHoursSavedMonthly = Math.round(savedHoursPerDoc * docs);
    const hourlyRate = 125; // Tier-1 institutional compliance/legal analyst blended rate
    const annualSavings = Math.round(totalHoursSavedMonthly * hourlyRate * 12);
    const velocityMultiplier = (manualHoursPerDoc / aiHoursPerDoc).toFixed(1);
    const riskPenaltyAverted = (annualSavings * 1.85).toLocaleString();

    if (hoursResult) hoursResult.textContent = totalHoursSavedMonthly.toLocaleString() + " hrs";
    if (costResult) costResult.textContent = "$" + (annualSavings >= 1000000 ? (annualSavings / 1000000).toFixed(2) + "M" : (annualSavings / 1000).toFixed(0) + "K");
    if (velocityResult) velocityResult.textContent = `${velocityMultiplier}x Faster`;
    if (riskResult) riskResult.textContent = `$${riskPenaltyAverted}`;
  }

  if (analystsInput && pagesInput && docsInput) {
    [analystsInput, pagesInput, docsInput].forEach(slider => {
      slider.addEventListener("input", updateCalculations);
    });
    updateCalculations();
  }
}

// --- Industry Solutions Tabs ---
function initIndustryTabs() {
  const tabs = document.querySelectorAll(".industry-tab-btn");
  const contentPanels = document.querySelectorAll(".industry-content-panel");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.industry;
      tabs.forEach(t => {
        t.classList.remove("active", "border-cyan-500", "bg-cyan-500/15", "text-cyan-400");
        t.classList.add("border-slate-800", "text-slate-400");
      });
      tab.classList.add("active", "border-cyan-500", "bg-cyan-500/15", "text-cyan-400");
      tab.classList.remove("border-slate-800", "text-slate-400");

      contentPanels.forEach(p => {
        if (p.id === `industry-panel-${target}`) {
          p.classList.remove("hidden");
          p.classList.add("animate-fade-in");
        } else {
          p.classList.add("hidden");
        }
      });
    });
  });
}

// --- Pricing Toggle (Annual vs Monthly) ---
function initPricingToggle() {
  const toggle = document.getElementById("pricing-period-toggle");
  const priceCore = document.getElementById("price-core-amount");
  const priceEnterprise = document.getElementById("price-enterprise-amount");
  const billingLabels = document.querySelectorAll(".billing-cycle-label");

  if (toggle && priceCore && priceEnterprise) {
    toggle.addEventListener("change", () => {
      if (toggle.checked) {
        // Annual (20% discount)
        priceCore.textContent = "$3,990";
        priceEnterprise.textContent = "$11,200";
        billingLabels.forEach(l => l.textContent = "/month (billed annually)");
      } else {
        // Monthly
        priceCore.textContent = "$4,990";
        priceEnterprise.textContent = "$14,000";
        billingLabels.forEach(l => l.textContent = "/month (billed monthly)");
      }
    });
  }
}

// --- Modal Controller for Institutional Briefing / Demo ---
function initModal() {
  const modal = document.getElementById("briefing-modal");
  const openButtons = document.querySelectorAll(".open-briefing-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  const briefingForm = document.getElementById("institutional-briefing-form");
  const formContent = document.getElementById("modal-form-content");
  const successState = document.getElementById("modal-success-state");

  if (!modal) return;

  openButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });

  const closeModal = () => {
    modal.classList.remove("open");
    document.body.style.overflow = "";
    setTimeout(() => {
      if (formContent && successState) {
        formContent.classList.remove("hidden");
        successState.classList.add("hidden");
      }
    }, 400);
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });

  if (briefingForm) {
    briefingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = briefingForm.querySelector("button[type=submit]");
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        Provisioning Sovereign Sandbox...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        if (formContent && successState) {
          formContent.classList.add("hidden");
          successState.classList.remove("hidden");
        }
      }, 1100);
    });
  }
}

// --- Scroll Effects & Intersection Observer ---
function initScrollEffects() {
  const reveals = document.querySelectorAll(".reveal-fade-up");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  reveals.forEach(el => observer.observe(el));

  // Navbar blur & scroll styling
  const nav = document.getElementById("main-nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      nav.classList.add("py-3", "border-b", "border-slate-800/80");
      nav.classList.remove("py-5");
    } else {
      nav.classList.remove("py-3", "border-b", "border-slate-800/80");
      nav.classList.add("py-5");
    }
  });
}

// --- Mobile Navigation Menu ---
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }
}
