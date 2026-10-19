---
title: Borrowing to Repay Existing Loans
slug: borrowing-to-repay-existing-loans
summary: >-
  I independently developed external and internal behavioral tags and severity ratings for suspected dependence on new borrowing to repay existing debt. The work combined clearer definitions, account-level processing, persistence and financing-pressure signals, refinancing-quality analysis, risk validation, backfills, and business delivery. The combined project received second prize in an internal risk-management competition.
order: 2
---

## Context and Ownership

When external lenders reduce limits, tighten disbursement, or leave the market, customers who depend on fresh credit to repay existing obligations can lose an important source of liquidity. Counting lenders or loan accounts alone does not establish how dependent a customer is on that continuing financing cycle.

I independently owned the optimization of the external V2 framework and the construction of the internal framework. My responsibilities covered rule design, data processing, definition corrections, candidate features, severity combinations, validation, historical backfills, deployment promotion, and business support.

The objective was to improve three aspects of the existing approach: reduce incorrect matches, distinguish occasional refinancing from persistent dependence, and connect external financing behavior with the lender's own assets.

## Two Complementary Views

The **external view** uses credit-report information to identify suspected refinancing behavior across external accounts and characterize the customer's overall dependence. Relevant information includes account balances, lending and repayment dates, scheduled payments, and credit inquiries.

The **internal view** combines credit reports with internal loan, application, disbursement, and repayment information. It starts with the lender's own loans to identify obligations that appear connected to further financing activity, then aggregates the behavior into customer-level indicators of dependence.

Both versions use interpretable rules and combinations of observed behavior. Risk outcomes guide validation and rule selection; a trained predictive model does not generate the severity rating. Temporal proximity and amount matching support a suspected relationship, but cannot prove that a particular new loan funded a particular repayment.

## External V2: Correcting the Base Definition

The earlier identification could match inquiries and repayments too loosely. Problems included date comparisons that did not fully distinguish months, accounts with no remaining repayment pressure, and insufficient separation between occasional debt replacement and repeated financing dependence.

I refined the relationship between borrowing and repayment dates, added actual repayment-pressure and recent-repayment conditions, and improved account deduplication. The development definition included a positive scheduled repayment and a constraint separating the latest repayment date from the next due date. Details such as the treatment of never-repaid or prepaid loans remain dependent on the final implementation.

In one base-definition comparison, DPD7 risk lift moved from 1.03 to 1.05. This modest change described the effect of cleaning the underlying definition. It is a separate result from the later highest-severity FPD7 amount-lift comparisons.

I also evaluated dense inquiry activity around a repayment date to capture financing intent before a full disbursement history was available. The analysis considered short windows around due dates. Candidate documents used different query-count thresholds, so the confirmed work is the assessment and incorporation of financing-intensity information rather than an assertion of one universal published threshold.

## Building External Severity Ratings

The rating combined several dimensions, each addressing a different part of dependence:

1. **Breadth:** the number of accounts involved in suspected refinancing behavior.
2. **Persistence:** the maximum consecutive months, within a six-month period, with inquiries around repayment dates.
3. **Financing intensity:** inquiry activity among customers showing refinancing intent.
4. **Refinancing quality:** evidence that some debt replacement represents a more favorable financing arrangement.

In the external development sample, the highest-severity tier's FPD7 amount lift evolved as follows:

- Account-count foundation: **2.08**.
- Adding persistence: **2.37**.
- Adding financing-intensity information: **2.41**.
- Adding the selected refinancing-quality information: **2.51**.

This sequence records the development process. Tier coverage changed as the rules were combined, so these values do not establish a fixed-coverage gain or a reduction in realized losses.

## Refinancing Quality and Rejected Alternatives

Borrowing to repay debt can include lower-cost refinancing and consolidation of several smaller obligations into a larger loan. Treating all such behavior as equally distressed would discard an important difference in financing flexibility.

For the external credit-report version, actual loan interest rates were not directly established. I therefore examined proxies such as a lower scheduled payment on a new account under comparable principal, term, and repayment-method constraints. Some local improvements were small: one tier's amount lift changed from 1.51 to 1.53.

Debt-consolidation features were more effective in the selected development sequence. A larger new loan associated with several existing accounts being repaid or closed helped distinguish borrowers who retained consolidation capacity; the highest-severity lift changed from 2.41 to 2.51 when this information was added.

I also tested repayment-structure changes, longer-term loans replacing shorter-term debt, and definitions of repeated high inquiry activity. Several directions produced limited or unclear benefit and were not included in the selected scheme. Business plausibility was a starting hypothesis, while observed risk and coverage determined whether a rule was retained.

## Window, Trend, and Guarantee-Related Experiments

I compared matching windows of 0, 1, 3, 7, 15, and 30 days. A three-day window performed better in April and May, while seven days performed better in June. No single window dominated every month, making coverage and behavior across periods part of the choice.

Trend experiments considered changes between reports, slopes across multiple reports, and interactions between windows. Some local samples showed incremental information, but the overall results did not meet expectations for a core contribution to the final scheme.

An additional V2.5 exploration tested guarantee-related account counts, guarantee-qualification inquiries, and interactions with guarantee ratings. Some short-term samples improved, while longer-term benefit and distribution stability were less convincing. The supplied delivery record indicated that the live external version remained V2; these experiments are therefore part of completed research, not a confirmed V2.5 production release.

## Internal Version: Starting from the Lender's Own Loans

The internal version examined loans due in the recent month, looking for applications around due dates and applying a recent-repayment condition to reduce mismatches. The initial binary definition alone separated risk weakly in April and May, with a stronger response in June. This motivated a multidimensional severity rating rather than relying on a single flag.

The dimensions followed the same business logic as the external version but used richer internal observations: affected loan count, repeated months of application activity, concentrated applications around one obligation, lower-interest replacement loans, debt consolidation, and external inquiry signals.

In the internal June development sample, tail FPD7 lift progressed through the following combinations:

- Count of affected internal loans: **1.23**.
- Adding consecutive months of dependence: **1.63**.
- Adding maximum application intensity around one loan: **2.18**.
- Adding lower-interest refinancing information: **2.70**.
- Adding debt-consolidation information: **4.94**.
- Adding external inquiry information: **4.74**, with broader tail coverage.

The last step illustrates an explicit tradeoff: a slightly less concentrated high-risk group in exchange for identifying more exposed loans. The underlying coverage increase was reported with an unresolved denominator, so I do not convert it into a precise percentage-point claim.

Internal data supported a more direct comparison of loan interest rates than the external credit-report version. Other experiments, including external lending persistence, internal application timing against external obligations, and limit or balance measures, provided limited benefit and were not treated as established improvements.

## Validation and Business Application

Validation included month-end post-loan samples and subsequent lending, monthly tier distributions, risk gradients, customer lifecycle stages, business segments, and interactions with existing components. Internal backfill records covered January through July 2026.

The external framework identified a high-risk tail, but its performance differed by lifecycle and customer group. Separation was more pronounced in some early-lifecycle populations, weaker or less stable in others, and not clearly ordered in later-lifecycle populations. Small tail samples also limited conclusions for some new-customer, offline, and NP groups.

Internal ratings showed useful ordering in May, June, and July, while April separation was weaker. Market contraction and customer composition are possible explanations for these differences, but monthly comparisons alone do not establish causality.

The overall project has been used across credit approval, drawdown, and post-loan management, supporting pricing, limit changes, eligibility, segmentation, customer management, and liquidity-dependence analysis. This describes the combined project's application range; the two versions do not necessarily enter every downstream process in the same way.

## Delivery, Recognition, and Remaining Detail

I completed historical deliveries, validation, deployment promotion, and support for downstream teams. The external transaction version launched on August 14, 2026, followed by the post-loan version on August 19. Approval backfill delivery was documented, while an exact approval release date was not established. The internal version's exact production name and date also remain unspecified in the supplied record.

The combined internal and external project received second prize in the internal Risk Hunter competition. Its practical contribution was a more interpretable, reusable view of financing dependence, with clearer definitions and explicit risk-versus-coverage choices.

Reported lift figures belong to their original samples and risk definitions. Fixed-coverage improvement, policy profitability, and loss reduction would require separate evidence. Implementation details still requiring final-code confirmation include some query thresholds, principal-matching expressions, repayment-record selection, and special-case handling.
