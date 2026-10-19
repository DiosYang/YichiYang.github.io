---
title: Credit Card Risk Rating
slug: credit-card-risk-rating
summary: >-
  I independently built and launched a four-tier credit card risk rating to identify deterioration within relatively low-risk customer groups. The work covered 40 research-rule validations, features from multiple credit reports, seven complementary information categories, iterative rating combinations, risk analysis, historical backfills, and deployment for pricing, limits, and segmentation.
order: 3
---

## Business Objective and Ownership

Existing low-risk tiers can contain customers whose short-term risk is rising faster than the group average. The objective of this project was to identify those pockets within the existing first and second risk tiers and help explain the behavioral signals associated with deterioration.

I independently owned the complete development process: validating business-research rules, processing underlying variables across credit reports, analyzing individual features and interactions, constructing the rating, evaluating performance, preparing historical backfills, and launching the result.

The deployed solution is a four-tier rating built through successive feature binning and rule intersections. Its main uses are limit and pricing adjustments, segmentation, and short-term risk investigation.

## Research Rules and Credit-Report Processing

I validated 40 rules proposed by the user-research function, translating qualitative risk ideas into data definitions and evaluating their usefulness. This was a distinct body of validation work. The record does not establish how many individual research rules were adopted or imply that the final seven information categories were selected directly from those 40 rules.

Some features required multiple credit reports. Repeated reports can add evidence about persistence and changes in limits, beyond the state visible in a single snapshot. I processed features covering persistent high utilization and declining limits, then evaluated whether this additional information improved the existing rating combination.

The exact implementation of cross-report account matching, duplicate-card counting, closed accounts, and missing reports was not fully specified in the supplied material. The experience can therefore establish the feature-processing work without inventing an unverified matching algorithm.

## Seven Complementary Information Categories

The final combination drew on seven categories:

1. **Total credit card limit:** the overall scale of bank-granted credit.
2. **Current utilization:** how much of that credit is currently occupied.
3. **Average limit per card:** account structure behind the same overall credit amount.
4. **Minimum card limit:** another view of the distribution of limits across accounts.
5. **Persistent high-utilization card count:** sustained utilization pressure using information from more than one report.
6. **Bank-imposed payment restrictions:** cards with a bank stop-payment status.
7. **Share of cards with reduced limits:** a view of changes in available bank credit.

These categories connect credit capacity, current use, persistent pressure, and bank-side actions. Credit limits can also reflect policy, voluntary adjustments, and account structure, so they are analytical signals rather than direct measurements of income or a definitive bank assessment of the borrower.

The development description referred to cards with utilization above 80% and cards with limits reduced by more than 10%. Final executable counting rules depend on the report-matching and processing definitions; the category names alone do not specify every condition.

## From Individual Features to a Four-Tier Rating

I first examined total limits and current utilization individually, then crossed the two to understand how utilization risk differed at different levels of available credit. The July sample showed a higher-limit bin with an FPD7 amount lift of 0.77, while the highest-utilization bin had a lift of 1.45.

Zero utilization, missing utilization, and low positive utilization were observed separately. Their July amount lifts were 0.88, 1.28, and 0.70 respectively, showing why a missing value should not simply be grouped with low observed usage.

I then progressively added average limits, minimum limits, persistent utilization, bank restrictions, and limit reductions. At each stage, I compared tier coverage, customer- and amount-based risk, lift, and changes over time.

For the highest-risk tier in July, the development sequence was:

- **Total limit × current utilization:** 19.71% of loan counts, 14.19% of disbursed amounts, amount lift **1.45**.
- **Adding average limit:** 15.49% of counts, 10.14% of amounts, lift **1.54**.
- **Adding minimum limit:** 4.92% of counts, 2.98% of amounts, lift **1.72**.
- **Adding persistent high utilization:** 6.06% of counts, 3.88% of amounts, lift **1.83**.
- **Adding bank restrictions:** 6.14% of counts, 3.94% of amounts, lift **1.85**.
- **Adding limit-reduction share:** the same highest-tier coverage and lift, with redistribution elsewhere in the rating.

The last addition improved the structure of lower and middle tiers rather than increasing tail lift: the lowest tier's July amount lift changed from 0.56 to 0.49. Coverage changed through the sequence, so the stages are not a fixed-coverage comparison.

## Final Development-Sample Results

The final July rating showed the following amount-based FPD7 results:

- **Tier 1:** delinquency rate **0.14%**, lift **0.49**, and **16.12%** of disbursed amounts.
- **Tier 2:** delinquency rate **0.27%**, lift **0.92**, and **49.63%** of amounts.
- **Tier 3:** delinquency rate **0.37%**, lift **1.28**, and **30.31%** of amounts.
- **Tier 4:** delinquency rate **0.54%**, lift **1.85**, and **3.94%** of amounts.
- **Overall:** delinquency rate **0.29%**.

This was a useful risk gradient in the July development sample. Tier 4 represented 6.14% of loan counts, which is a different denominator from its 3.94% share of amounts.

The project also emphasized deterioration speed. Tier 4's FPD7 amount delinquency rose from approximately 0.27% in May–June to approximately 0.54% in July. The original unrounded calculation reported a **100.25% relative increase**, compared with **48.16% overall**. The absolute increases were approximately **0.27** and **0.09 percentage points** respectively.

Earlier periods were not perfectly ordered: in May–June, tiers 3 and 4 had amount lifts of 1.40 and 1.37. The interpretation therefore combined current risk, deterioration, coverage, and population differences rather than relying on a single month's tail value.

## Subsequent Delinquency Observation

A separate follow-up analysis compared May lending observed in June and June lending observed in July against July lending observed in August. It used actual disbursed principal and maturity-adjusted principal due for D0, D3, and D7 delinquency-entry rates. D3 and D7 required the corresponding observation period to have elapsed.

In this observation, Tier 4's D7 delinquency-entry rate increased from approximately **0.35% to 0.74%**, a **110.95% relative increase**. Overall, it increased from approximately **0.28% to 0.43%**, or **53.94%**. Tier 4's D3 relative increase was **95.56%**, compared with **50.28% overall**. Its share of comparison-period disbursed amounts was **3.76%**.

These follow-up measures use different samples and denominators from the FPD7 development results. The file name used an out-of-time label, but the available record does not establish that the evaluation was an independent holdout untouched by rule selection. I describe it as subsequent and cross-period validation.

## Validation Within Existing Risk Tiers and Segments

I examined whether the rating still identified deterioration after conditioning on existing segmentation:

- In the existing first risk tier, the highest card-risk tier's D7 rate rose from approximately **0.13% to 0.50%**, a **301.52% relative increase**, compared with **74.34%** for that overall risk tier.
- In the existing second tier, the relative increase was **92.69%**, compared with **48.18% overall**.
- In tiers three and above, the figures were **98.34%** and **60.00%**.
- Within an existing small-business customer subgroup in the first risk tier, the highest card-risk tier rose from approximately **0.15% to 0.90%**, or **495.53%**, against **56.65%** for the subgroup overall.

The last result is a specific subgroup observation with a low starting rate, not a general result for every small-business customer. Some other segments, including NP in the follow-up analysis, did not show the same relative deterioration pattern. Rating reversals also remained in some populations.

## Delivery and Practical Contribution

I completed backfills and deployment of the four-tier combination. It supplies a reusable view of credit-card limit structure, utilization pressure, persistence, and bank restrictions for pricing, limits, segmentation, and risk diagnosis.

The work's contribution is the identification and interpretation of customers with higher or faster-rising risk. Those analytical results do not quantify the subsequent profitability or loss reduction of a policy using the rating. Exact release details, missing-value routing, final production field names, and fixed-coverage incremental gains remain items for further implementation-level documentation.
