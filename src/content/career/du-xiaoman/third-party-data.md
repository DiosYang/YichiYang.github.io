---
title: Third-Party Data Evaluation and Integration
slug: third-party-data
summary: >-
  I was the primary data contact for multiple-lender borrowing and debt-refinancing dependence, with work spanning 12 sources or partners and 14 source-by-use-case records. I evaluated scores, raw features, and behavioral tags, supported integrations and feature reuse, completed an on-site assessment, and contributed to the external-data evaluation and integration SOP.
order: 4
---

## Responsibility and Scope

External data is valuable when it fills an identifiable information gap in the existing risk system. My responsibility was to understand what a source actually measured, how reliably it covered our customers, and whether it added useful discrimination beyond existing ratings and scores.

I was the designated data contact for multiple-lender borrowing and borrowing-to-repay-debt use cases. The work included requirement clarification, supplier and product communication, historical sample tests, data-quality review, risk evaluation, cross-component incremental analysis, integration recommendations, and downstream support. I also participated in documenting the end-to-end external-data SOP and handled Pudao communication in a separate investigation of changes among lower-tier institutions.

The documented scope covered **12 distinct sources or partners**, including an internal financial-technology source. Counted by source and business direction, it comprised **14 records**: six in multiple-lender borrowing and eight in debt-refinancing dependence, with two sources appearing in both directions. This is a work-coverage count, not a claim of 14 independent production launches.

## A Common Evaluation Framework

I began with the product description, data dictionary, event definitions, observation windows, granularity, update frequency, and historical availability. A supplied field could represent a trained model score, a behavioral tag, an index, or underlying inquiry and repayment events. Similar names did not guarantee comparable meanings across providers.

After matching data to the intended business population and decision or snapshot time, I examined retrieval coverage, missing values and special codes, distributions, and behavior by month. Risk evaluation included KS, information value, monotonicity, tail risk, and lift. The next step was to cross candidates with existing components and risk tiers to see whether they continued to distinguish risk within a comparable baseline group.

Coverage and risk concentration were assessed together. A high lift in a tiny group may not provide enough additional reach; broad new coverage may add little if its risk resembles an already low-risk tier. Historical tests also require attention to whether information was available at the time and to the sampling design. Oversampling delinquent observations changes the interpretation of raw risk rates unless the evaluation uses an appropriate restoration or common comparison basis.

## Evaluating Vendor Scores and Indices

For compressed outputs such as anti-fraud scores or composite indices, I asked the provider about:

- The original data and institutions represented.
- The target label and whether the score addressed fraud, credit delinquency, or another outcome.
- Training populations, dates, and how they compared with our borrowers.
- Feature windows, historical versions, backfill methods, and refresh frequency.
- The direction of the score and the meaning of missing, default, and error values.

These questions informed validation on our own population. A score trained on another platform can face a different financing-demand distribution, institution mix, or borrower profile when applied to our business. The work therefore combined supplier communication with local-sample testing; it did not assume that the provider's original performance transferred unchanged.

In the Tencent anti-fraud assessment, I evaluated January–March drawdown backfills, standalone ordering, and interactions with the existing multiple-lender component and small-business segments. The score showed useful separation and complementary information and was subsequently integrated. Its anti-fraud product label did not replace testing against our credit-risk outcomes.

## Evaluating Underlying Features and Building Our Own Scores

For supplied inquiry, institution, repayment, and pricing-preference fields, I examined the event definitions and then screened coverage, missingness, risk gradients, IV/KS, and tail behavior in batches. Important distinctions included overlapping windows, counts versus distinct institutions, phone-number versus identity-based retrieval, and predicted preferences versus directly observed transactions.

Across five products from Zhongzhicheng and Bairong, the assessments covered **5,597 supplied candidate fields**: 3,372 across three Zhongzhicheng products and 2,225 across two Bairong products. This reflects the sum of supplied product fields, not a deduplicated set of production features.

Where a group of underlying variables could be more useful in combination, I developed an internal score and then tested its additional value against existing components. The financial-technology data was a completed example: I performed feature selection, model comparison, and Optuna tuning, selecting LightGBM for drawdown and XGBoost for approval. Evaluation used short-delinquency outcomes, precision–recall performance, and risk at equal population coverage.

That modeling work was specific to the completed source and use cases. It does not imply that every provider's raw variables were independently modeled.

## Representative Multiple-Lender Assessments

**Zhongzhicheng.** Three products covered phone inquiries, identity inquiries, and credit-report-related fields. I prepared post-loan and approval backfills and assessed individual variables and interactions with existing ratings. Some variables ordered risk, but overall additional value was limited, with possible overlap with existing Baihang information and low coverage for some signals. The recommendation was selective further evaluation rather than blanket adoption.

**Bairong.** I assessed borrowing-intent and interest-rate-preference products on February–March drawdown samples, including approximately one million sampled orders per month. Individual borrowing-trend and high-interest-related variables showed notable tail risk in some bins, but the recommendation still depended on coverage, segment validation, and component-level incremental value. A different Bairong debt-refinancing product had approximately 12% retrieval coverage and weaker overall value, illustrating why decisions need to be product-specific.

**Pudao.** I investigated the compressed-inquiry definitions, institution details, reasons for queries, and field mappings. The product documentation described keeping the first query within a one-minute compression interval, which mattered when interpreting repeated product checks and lender polling. Testing included historical transactions and deduplication by each customer's first transaction in a month. I also supported Pudao communication in the institution-change investigation.

**Shangshu.** Composite indices showed a risk gradient in the tested February–March samples. The work supported continued segment-level evaluation and selective consideration, rather than a confirmed full production rollout.

## Behavioral Tags and Debt-Refinancing Dependence

For behavioral tags, I examined the event definition, account or customer level, time window, and whether a field represented direct observation or an inferred pattern. I then crossed the source with internal and external debt-refinancing ratings to identify the customers newly reached, their risk, and their coverage.

The eight assessed sources in this direction included UnionPay, Tongdun, Haina, Bairong, Tianchuang, Mashanghui, Pudao, and Ruizhi. Findings varied:

- Tongdun retrieved approximately 191,000 of 200,000 samples, but its standalone ordering did not translate into clear cross-component benefit.
- Haina supplied interpretable repayment-related variables. Some showed lift above 3 and retained value in cross-analysis. Evaluation was completed and integration was planned.
- Tianchuang had selected variables worth considering after cross-analysis, while other sources showed limited additional value or coverage.
- The Bairong and Ruizhi products in this specific direction were not recommended in the documented assessments.

These are product- and sample-specific conclusions, not general judgments about the providers.

## UnionPay On-Site Assessment

I completed an on-site assessment of UnionPay behavioral tags under data-access restrictions. The sample covered April–June post-loan snapshots and subsequent lending, with approximately one million observations selected across customer groups and existing risk tiers.

I compared 30-, 90-, 180-, and 365-day tags and crossed them separately with internal and external refinancing-dependence ratings:

- The 365-day tag reached approximately **12%** of customers and added around **6%** beyond one external-rating definition, but the additional group's risk resembled the original lowest-severity tier.
- The 90-day tag reached approximately **4.5%** and added around **2%**, with risk around the original second tier.
- The 30-day variables showed local additional value within external tiers 1 and 2, but the relevant population was below **2%**.

The windows describe different observations and cannot be combined into a single coverage gain. The assessment's value included identifying when new reach was not sufficiently concentrated in risk to justify a stronger recommendation.

## Contributing to the Integration SOP

I helped document the workflow from demand discovery to ongoing use:

1. **Requirements and source research:** clarify information gaps, definitions, population coverage, refresh frequency, historical tests, and commercial context.
2. **Test design and data return:** define populations, periods, labels, samples, and supplier handoffs.
3. **Effectiveness evaluation:** review coverage, quality, standalone risk, and incremental value against existing components.
4. **Business feedback:** share findings with the relevant customer and strategy teams and collect their requirements.
5. **Procurement and implementation handoff:** coordinate approved demand with procurement, interface development, variable processing, testing, and deployment.
6. **Documentation and ongoing operation:** record versions, fields, availability, usage, and operating information for continued review.

My execution responsibility concentrated on data and evaluation work, component needs, communication, integration support, and knowledge capture. Procurement contracts, overall coordination, and cost operations had their own designated owners. Process turnaround targets were workflow expectations, not measured personal efficiency gains.

## Integration, Reuse, and Outcomes

Confirmed integrations included the internal financial-technology source, Pudao data, and Tencent anti-fraud scores. Haina was evaluated and planned for integration. UnionPay supplied an on-site evaluation experience, with integration not confirmed in the record.

Pudao and internal financial-technology information also supported guarantee-risk and liquidity-dependence ratings, customer-specific strategies, and feature provision to the modeling team's application, behavioral, and NP-specific scores. I supported the data evaluation, coordination, and feature supply; the modeling team's full training and deployment work remains distinct from my responsibility.

The result was a repeatable assessment-to-use process: clarify the information, test it on the target population, evaluate what it adds, and make a recommendation consistent with its actual value. The record establishes evaluation and integration contributions, while precise cost savings, production usage, and policy profitability require separate operating evidence.
