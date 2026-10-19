---
title: Business Analysis and Risk Evaluation Automation
slug: other-analyses
summary: >-
  I investigated returning customers, pricing requests, risk-tier migration, and changes around credit interviews, connecting customer behavior with subsequent risk and business decisions. I also supported evaluation-platform development by defining approval, drawdown, and post-loan analysis paths and requirements for online, backfilled, and supplier-provided variables.
order: 5
---

## Scope of My Work

These assignments began with specific management questions rather than a single new risk score. I connected customer behavior, credit-report information, limits and pricing, existing segmentation, and subsequent repayment outcomes to determine whether customers required differentiated treatment.

The main outputs were a returning-customer analysis that supported a dedicated policy launch, evaluation of LLM-derived pricing-request tags, validation of customers moving between risk tiers, before-and-after score analysis around credit interviews, and business support for variable-risk evaluation automation.

## Returning Customers After Account or Limit Closure

### Business Questions and Sample

Customers who close an account or borrowing limit and later return pass through approval and drawdown again. I examined whether their earlier risk history remained informative, whether their business identity changed, how limits and pricing moved, and whether subsequent borrowing and delinquency warranted a separate policy.

The main historical sample covered customers closing accounts or limits in January–April 2025 and returning within 90 days. I linked the latest pre-closure post-loan snapshots available in the historical data with returning approval, drawdown, and risk information. The main customer-group analysis included approximately **48,500 customers**, of whom approximately **44,100** had historical post-loan records.

### Analysis Performed

I compared pre-closure post-loan tiers separately with returning approval and drawdown tiers. Keeping those stages distinct avoided interpreting every difference between approval and drawdown classifications as an actual change in underlying borrower risk.

I checked on-platform, off-platform, and offline business ownership and new-versus-existing customer identities. I then compared approval outcomes, limits, and pricing by earlier tier, segment, and closure type, and related changes in limits and pricing to applications during the next 90 days. Finally, I examined person- and amount-based FPD7 risk by return interval and prior tier.

### Findings and Policy Use

Among customers previously in the first post-loan tier, approximately **28.6%** returned into approval tier A and **35.0%** into B. Among those who subsequently applied for drawdown, approximately **89.0%** were still in the first drawdown tier. For previous second-tier customers who applied, approximately **79.8%** fell into the first or second drawdown tiers. These percentages refer to different stage-specific populations.

Business identity was often persistent. Approximately **98–99%** of returning existing on-platform customers remained on-platform, while **86.7%** of previous off-platform customers remained off-platform. Offline identity appeared less persistent at approval, but approximately **99.8%** of the relevant returning drawdown population remained offline. Previously identified existing customers continued through the existing-customer transaction policy.

Among successfully reapproved customers with comparable limits, 90-day drawdown-application rates were **81.6%** when the new limit increased, **79.7%** when unchanged, and **66.5%** when it decreased. Higher limits and lower prices were associated with more subsequent applications, with limits showing a clearer distinction in the documented analysis. This was observational association rather than an experiment measuring the causal benefit of changing limits or prices.

In the return-interval risk analysis, **10,982** borrowing customers included **150** FPD7 cases: **1.37%** person-based and **0.43%** amount-based delinquency. A contemporaneous post-loan reference showed **0.57%** and **0.26%**. Different populations and observation structures limit direct attribution, but the comparison supported treating returning-customer risk as a distinct management question.

The overall analysis supplied evidence for a dedicated returning-customer policy, which was launched. The contribution was a structured view of historical identity, tier continuity, limits and pricing, borrowing behavior, and risk.

## Pricing Requests and LLM-Derived Customer Intent

### My Analytical Role

Customers may ask for lower prices because they face repayment pressure, compare competing offers, or have other reasons. I used existing LLM-derived tags from customer-service and messaging conversations to examine those differences. My role was to evaluate the tags' risk and customer-management value; it did not include training or deploying the language model.

The main analysis used a historical month-end cash-loan population and subsequent lending, with short-term and later risk views. A further comparison examined rate-shopping customers across two month-end populations.

### Combining Conversation Tags with Risk and Business Data

I separated the full population, customers covered by model outputs, covered customers without pricing requests, and customers expressing requests. Request reasons were then divided into repayment pressure, rate shopping, and other motives.

I compared lending amounts, person- and amount-based delinquency and lift, repeat borrowing, credit inquiries, debt-service measures, internal and external prices and limits, available credit, and utilization. I also repeated comparisons within existing risk tiers and examined interactions with liquidity-dependence ratings, utilization, inquiries, debt-to-income measures, and credit-report accounts with zero balances.

### Findings and Interpretation

The model-covered population included **584,725 customers**, of whom **346,830**, or **59.3%**, expressed a pricing request. This was a covered conversation population, not a random sample of all post-loan customers.

Among subsequent successful borrowers, customers expressing a request accounted for approximately **6.92%** of people and **14.33%** of lending amounts. Their short-term FPD7 person- and amount-based lifts were **0.48** and **0.61**, using the main table's full lending population as the reference. Rate-shopping customers were lower-risk in that comparison, with lifts of **0.44** and **0.57**. Their later C1+@MOB2 lifts were **0.45** and **0.53**.

Repeat-borrowing rates were **41%** for customers expressing a request versus **37%** for covered customers without one. Rate shoppers had a **38%** repeat-borrowing rate and tended to have fewer inquiries and more available credit. These patterns showed why a pricing request should not automatically be interpreted as financing distress.

Results differed within existing tiers. In the first risk tier, request customers showed lower short-term but higher later risk than those without a request; rate shoppers showed lower risk on both views. The second tier had useful lower-risk separation, while additional rate-shopping separation was less clear in higher-risk tiers.

Liquidity information provided more distinction within rate shoppers than inquiry counts in some comparisons. In one zero-balance-account cross-analysis excluding missing values, DPD7 amount delinquency declined from **0.1934%** for the lowest account-count group to **0.1118%** for the 7+ group. This remained a sample association for further evaluation.

The work supported more differentiated pricing and customer-management hypotheses. A specific resulting production policy was not confirmed. Short-term source labels were also inconsistent across analysis views, so reported FPD7 and DPD7 figures retain their original definitions rather than being merged into one metric.

## Risk-Tier Migration

I examined customers moving upward and downward across risk tiers during January–May to assess whether their observed risk aligned with their new classification. The question concerned the relevance of migration history, beyond whether tier population shares looked stable.

The review found that upward-moving customers retained somewhat higher risk, suggesting that their new tier did not fully capture the difference associated with their previous classification. This supported considering historical tiers and migration paths when designing differentiated treatment.

The confirmed outcome was analytical support for subsequent policy adjustments. A precise risk gap, statistical significance, downward-migration conclusion, and completed policy effect were not supplied, so I do not attach those claims to the work.

## Score Changes Around Credit Interviews

For customers receiving credit-related interviews, I compared credit-report subscores and behavioral scores before and after the interaction. Evaluating the two separately allowed a view of both the credit-report dimension and the broader score.

The analysis did not show a clear upward trend in either measure. That provided feedback for reviewing the activity, but the available evidence did not include a control group, a fully specified observation window, or a significance test. The finding is therefore a lack of observed score improvement in that analysis, not a definitive causal conclusion about the interviews.

## Supporting Risk-Evaluation Automation

Repeated variable analysis involves more than producing a distribution chart. Approval, drawdown, and post-loan use different evaluation paths, and variables may come from online fields, historical backfill tables, or supplier CSV files. These differences must be represented correctly before risk and incremental-value results can be trusted.

I supported platform development by explaining these end-to-end business paths and the practical input scenarios encountered in daily evaluation. I helped clarify the need to handle historical data, existing online variables, and external offline deliveries within the evaluation process.

I also promoted support for marginal-value analysis: analysts should be able to inspect whether a candidate adds risk discrimination within an existing tier or variable combination, as well as its standalone distribution. My contribution was business-process clarification, requirements, and evaluation logic; the full platform's engineering work remained a collaborative responsibility.

## Practical Outcomes

The assignments connected analysis with distinct decisions: a launched returning-customer policy, hypotheses for differentiated pricing, evidence about migration history, feedback on credit interviews, and clearer requirements for an evaluation platform.

The record does not provide measured platform time savings or a common causal estimate of policy benefit. The professional contribution is the ability to turn specific business questions into aligned samples, interpretable comparisons, and recommendations consistent with the strength of the evidence.
