---
title: Du Xiaoman Technology (Beijing) Co., Ltd.
slug: du-xiaoman
dates: Oct 2025 – Present
role: Risk Variable Mining
order: 1
---

## My Perspective on Credit Risk

Credit risk management balances portfolio risk with lending volume. My focus is to identify concentrated pockets of high risk, so that targeted intervention can protect the portfolio while preserving lending capacity for other customers.

I develop both model-based variables and interpretable behavioral tags. Models can capture complex patterns, but depend on historical repayment outcomes and may become less reliable as the external environment changes. Behavioral tags can support earlier responses to emerging risks. I assess both through their risk differentiation, timeliness, stability, coverage, and the business cost of acting on them.

## Selected Work

- [Multiple-Lender Borrowing](#multiple-lender-borrowing)
- [Borrowing to Repay Existing Loans](#borrowing-to-repay-existing-loans)
- [Credit Card Risk Rating](#credit-card-risk-rating)
- [Third-Party Data](#third-party-data)
- [Other Analyses](#other-analyses)
- [AI-Assisted Risk Analysis and Feature Discovery](#ai-assisted-risk-analysis-and-feature-discovery)

### Multiple-Lender Borrowing

I independently owned the development and iteration of a reusable multiple-lender borrowing risk component, from sample preparation and feature selection to model development, rating design, historical scoring, deployment coordination, and maintenance. I expanded the existing data with internal financial-technology and interest-rate-related borrowing signals, replacing the earlier GRU approach with models selected separately for credit approval and loan drawdown.

**Model development.** I developed four underlying scores using Baihang and internal financial-technology data. LightGBM was selected for drawdown and XGBoost for credit approval based on the results in each setting. I screened features using information value (IV), KS, and tree-model gain, and used Optuna for hyperparameter optimization. Evaluation emphasized precision–recall performance and delinquency rates and lift at the same population coverage, using DPD7 and DPD30 outcomes for more timely feedback.

**Business delivery.** The component is used across credit approval, drawdown, and post-loan management, covering small-business, consumer, off-platform, NP, and offline customer segments. Its applications include eligibility, pricing, limit increases, post-loan limit and price adjustments, and customer segmentation. I also adapted the small-business post-loan rating distribution to support differentiated pricing and limits.

**Continuous iteration.** As institutions exited the external lending market, changes in inquiry data shifted the rating distribution. I developed and backtested a refinement combining the current rating with the worst rating observed over the preceding six months. The analysis supported broader high-risk coverage at a similar risk level and improved ordering in some segments. I also evaluated percentile and trend-based alternatives as research inputs for V7.

### Borrowing to Repay Existing Loans

I independently developed the external V2 and internal versions of a rule-based framework for identifying suspected dependence on new borrowing to service existing debt. The external view uses credit reports to characterize customers’ broader refinancing dependence; the internal view connects credit information with our loan, application, disbursement, and repayment records to identify potentially exposed assets.

**Definitions and rating construction.** I refined date matching, repayment-pressure conditions, and account deduplication to reduce false matches. I then combined account or loan breadth, consecutive months of dependence, concentrated inquiry or application activity, and refinancing quality into severity ratings. Distinguishing lower-cost refinancing and debt consolidation helped avoid treating every instance of borrowing to repay debt as equally risky. These are interpretable behavioral indicators, not proof that funds flowed between specific accounts.

**Validation and tradeoffs.** In the external development sample, the highest-severity tier’s amount-based FPD7 lift moved from 2.08 to 2.51 as the rules were combined. In the separate internal June sample, tail FPD7 lift moved from 1.23 to 4.74. Adding external inquiry signals broadened coverage while slightly reducing concentration from an intermediate peak of 4.94. These figures describe the development process in separate samples with changing tail coverage.

**Delivery.** I completed risk validation, historical backfills, deployment promotion, and business support. The external transaction and post-loan versions launched in August 2026, and the broader project is used across credit approval, drawdown, post-loan management, and multiple business teams. The combined internal and external project received second prize in the internal Risk Hunter competition.

### Credit Card Risk Rating

I independently built and launched a four-tier credit card risk rating to identify customers whose risk was deteriorating within relatively low-risk existing segments. I owned the process from validating 40 business-research rules and processing multiple credit reports through feature analysis, rating combinations, backtesting, and deployment.

**Rating design.** The final rating combines seven categories of information: total credit limits, current utilization, average and minimum card limits, persistent high utilization, bank-imposed payment restrictions, and the proportion of cards with reduced limits. I started with the interaction between total limits and utilization, then assessed the incremental contribution of additional account-structure and behavioral signals. The 40 research rules were a separate validation workstream, not a claim that seven rules were selected directly from that set.

**Risk deterioration analysis.** I evaluated both current risk and its rate of change, with checks across existing risk tiers and business segments. In the July development sample, the highest-risk tier had an amount-based FPD7 lift of 1.85. In a separate subsequent delinquency observation, this tier’s D7 delinquency-entry rate rose by 110.95%, compared with 53.94% overall. This demonstrated its ability to identify faster deterioration in that observation period.

**Application.** The deployed rating supports limit and pricing adjustments, segmentation, and investigation of short-term deterioration. Segment-level validation also identified inconsistent ordering in some periods and populations, helping define where the rating required more cautious interpretation.

### Third-Party Data

I was the primary data contact for multiple-lender borrowing and debt-refinancing dependence, responsible for assessing data gaps, understanding products, arranging historical tests, evaluating risk performance, and supporting integration. The work covered 12 data sources or partners, including an internal source, with 14 source-by-use-case records.

**Evaluation by data type.** For vendor scores, I investigated source coverage, training populations and labels, historical availability, update frequency, and special-value meanings before testing performance on our borrowers. For underlying variables, I assessed definitions, missingness, coverage, risk ordering, and interactions with existing components, building our own scores where appropriate. For behavioral tags, I examined the observation window, customer or account granularity, and whether the tag represented observed behavior or an inference.

**Representative work.** Batch assessments spanned roughly 5,600 supplied fields across five products. I examined query-compression definitions, tested whether seemingly effective variables duplicated existing information, and completed an on-site UnionPay assessment under data-access constraints. Across these tasks, the key question was whether a source added useful information within existing risk tiers, not simply whether it had strong standalone lift.

**Integration and reuse.** I helped bring internal financial-technology data, Pudao data, and Tencent anti-fraud scores into use. I completed Haina’s evaluation and supported a planned integration. Data and features also supported liquidity-dependence and guarantee-risk ratings, business strategies, and the modeling team’s application and behavioral scores. I contributed to the external-data SOP covering requirements, testing, evaluation, handoff, integration, and documentation, working with the teams responsible for procurement and ongoing operations.

### Other Analyses

I carried out targeted investigations connecting customer behavior, credit information, risk segmentation, and subsequent repayment performance, translating the findings into differentiated management recommendations.

**Returning customers.** I analyzed approximately 48,500 customers returning after closing their limits or accounts, comparing pre-closure and returning customer identities, approval and drawdown tiers, limits, pricing, subsequent applications, and delinquency. The findings supported the launch of a dedicated returning-customer strategy.

**Pricing requests and customer intent.** Using existing LLM-derived customer-service tags, I distinguished repayment-pressure requests from rate-shopping behavior and examined their risk, repeat borrowing, available credit, and liquidity characteristics. This was business analysis of model-generated tags. My contribution focused on validating their risk and customer-management value.

**Risk-tier migration and credit interviews.** I evaluated subsequent risk among customers moving between tiers, finding that upward migration did not fully remove the relevance of their prior risk history. I also compared credit-report subscores and behavioral scores before and after credit interviews; the analysis did not show a clear upward trend. Both investigations informed subsequent strategy reviews.

**Evaluation-platform collaboration.** I supported risk-evaluation automation by explaining the approval, drawdown, and post-loan evaluation paths and the differences between online variables, historical backfill tables, and third-party CSV inputs. I helped define risk-performance and incremental-value analysis requirements, while platform engineering remained a collaborative responsibility.

### AI-Assisted Risk Analysis and Feature Discovery

I led the design and implementation of a risk-profile discovery and feature-mining agent, carrying out most of the development. Using Claude Code and reusable Skills, I translated practical feature-development and risk-evaluation experience into an AI-orchestrated workflow: clarify the business question, define the data and evaluation scope, retrieve existing variables, generate candidates, compose customer profiles, evaluate risk, and retain the results.

**Domain knowledge and execution tools.** I organized data definitions, field mappings, source priorities, business rules, and processing guidance into domain-specific Skills. I built variable search and metadata lookup, credit-report feature-processing paths, configurable profile combinations, SQL generation, quality checks, and reporting tools. This connected business reasoning with executable definitions and code while preserving the ability to review how a candidate was derived.

**Evaluation and iteration.** I implemented checks for sample granularity, duplicate keys, time alignment, label maturity, and person- and amount-based risk denominators. The evaluation workflow examines coverage, risk ordering, lift, IV, and KS across time windows and customer segments, and distinguishes data-quality failures from weak predictive results. Diagnostic feedback supports revising definitions and reevaluating candidates. Multiple-window checks provide supporting evidence, rather than a substitute for an independent out-of-time test.

**Reusable analytical tools.** I also developed six Skills covering standard risk evaluation, incremental cross-variable analysis, constrained binning search, interactive rating construction, and two Excel-to-HTML visualization workflows. These tools preserve editable rating mappings and calculation rules, combining automated exploration with analyst review.

**Current progress.** The agent has entered team trials and has produced credit-report feature candidates. The current focus is deeper behavioral interpretation, more complex account and cross-report relationships, and validation of incremental value. The demonstrated outcome is a working application and candidate-generation capability; production adoption, validated feature counts, efficiency savings, and risk improvements have not yet been established.
