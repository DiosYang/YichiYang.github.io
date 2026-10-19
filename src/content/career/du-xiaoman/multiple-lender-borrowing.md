---
title: Multiple-Lender Borrowing
slug: multiple-lender-borrowing
summary: >-
  I independently developed and iterated a multiple-lender borrowing risk component, covering data preparation, four underlying models, rating combinations, historical scoring, deployment, and maintenance. The work expanded its information base, supported several lending stages, and addressed rating drift as the external lending market changed.
order: 1
---

## Context and My Responsibility

Borrowing activity across institutions can reveal financing demand that is difficult to see through a single lender's records. The challenge is to turn overlapping inquiry and account signals into a component that remains useful across credit approval, drawdown, and post-loan management.

I independently owned this iteration of the multiple-lender borrowing component. My work covered sample construction, underlying feature processing and selection, model development, score and rating combinations, risk evaluation, historical backfills, deployment coordination, business adaptation, and subsequent maintenance. I built on an existing component, extending its data and methodology rather than treating the entire preceding system as a new invention.

## Expanding the Data and Underlying Scores

I added internal financial-technology data and interest-rate-related borrowing information, and reconsidered how existing features and scores were combined. The broader component also uses credit-report-related scores, Baidu-related information, and other financial-technology sources.

Many underlying features summarize inquiry counts and distinct institutions across different windows and institution types. Preparing these inputs involved extracting historical business records, linking them with risk outcomes, and handling duplicate observations, missing values, field types, and sample attributes. Historical scoring and backfill datasets were also part of the delivery.

Four underlying models were developed separately:

- **Drawdown, Baihang data:** LightGBM.
- **Drawdown, internal financial-technology data:** LightGBM.
- **Credit approval, Baihang data:** XGBoost.
- **Credit approval, internal financial-technology data:** XGBoost.

These underlying model scores and the final component rating are distinct outputs. Other information enters the broader score and rating combination; the four models alone do not describe every input to the final rating.

For credit approval, I prepared six delivery variants for different customer groups, including new customers with different pricing profiles, off-platform, NP, offline, and a combined version. They shared underlying information while adapting processing to their intended populations.

## Feature Selection and Redundancy

The feature structure creates several forms of overlap. A 90-day inquiry count includes events also counted in shorter windows. An all-institution measure may overlap with nonbank or consumer-finance subsets. Inquiry frequency and the number of institutions contacted are related, but each can retain different information about repeated applications and financing breadth.

My selection process combined:

1. **Single-variable screening:** use information value (IV) and KS to narrow the candidate set based on observed risk separation.
2. **Model contribution screening:** inspect tree-model gain and cumulative contribution to reduce low-contribution inputs.
3. **Complexity control:** use depth, leaf or child constraints, sampling, and regularization to constrain the fitted models.
4. **Performance review:** assess the resulting combinations through risk separation, rating distributions, and monthly behavior.

Tree models can tolerate correlated tabular inputs better than a linear model whose coefficients become unstable under strong collinearity. They still allow related variables to compete for splits or divide importance between them. IV screening, gain ranking, and regularization each address part of the problem; none by itself establishes that redundancy has been eliminated.

I also treated long-tailed values, zeros, and missingness as separate data issues. A valid return of zero inquiries has a different meaning from a failed query or unavailable data. These distinctions matter when interpreting a score or diagnosing a distribution shift.

## Model Comparison and Optuna Tuning

I compared the earlier GRU approach with tabular modeling alternatives, including LightGBM, XGBoost, logistic regression, random forest, and deep-learning approaches. The inputs were largely engineered time-window statistics, so the practical question was which model best extracted risk information from that representation.

I used Optuna to explore parameter combinations rather than changing one setting at a time. Relevant dimensions included learning rate and boosting rounds, tree depth and leaf constraints, row and column sampling, L1/L2 regularization, and class weighting. I also explored sampling approaches for the low proportion of delinquent observations.

The final choice was based on each business scenario's results. LightGBM performed best among the compared candidates for the drawdown scores, and XGBoost for the approval scores. The central criteria were precision–recall performance and the risk concentrated within an equally sized selected population. This was an empirical choice for these datasets, not a general rule that one lending stage requires a particular algorithm.

I used DPD7 and DPD30 outcomes to obtain relatively timely risk feedback. Label maturity, loan age, and the observation window still determine which outcomes are available for a valid comparison. Class weighting changes the training loss; the resulting score is not automatically a calibrated delinquency probability.

## Evaluation at Comparable Coverage

In a low-delinquency setting, overall classification accuracy gives little insight into whether a model identifies the customers that matter for a risk decision. Precision–recall evaluation considers both the concentration of delinquent observations among selected customers and the share of all delinquent observations recovered.

For business comparison, I ranked customers by risk and selected the same proportion for each candidate. Within that common coverage, I compared DPD7/DPD30 delinquency and lift. If a score is oriented so that higher values mean better credit quality, the corresponding high-risk group lies at the low-score end.

The main evaluation views included:

- **Customer-based risk:** delinquent customers divided by customers with observable outcomes in the selected group.
- **Customer-based lift:** that risk rate relative to the comparable evaluation population.
- **Amount-based risk and lift:** delinquent amounts and their corresponding exposure denominator, reported separately from customer counts.
- **Monthly distributions and rating behavior:** coverage, risk gradients, reversals, IV/KS, and population stability index (PSI).

Comparisons require consistent samples, outcome definitions, maturity, and coverage. Precision–recall measures also depend on delinquency prevalence and the exact implementation of the metric. Monthly checks provide stability evidence, but the available development records do not establish a completely independent out-of-time test for every model.

## Delivery and Business Adaptation

The component has been used in credit approval, drawdown, and post-loan management across small-business, consumer, off-platform, NP, and offline populations. Applications include eligibility, pricing and real-time price changes, transaction supplementation, limit increases, post-loan limit and price adjustments, segmentation, and customer reoffers. It is also an important input to liquidity-dependence analysis.

These are the confirmed overall uses; they do not imply that every customer population uses every application in exactly the same way.

Key releases included the transaction V6 version on February 2, 2026, post-loan V6 on March 1, small-business post-loan V6.5 on April 26, and approval V6 on July 1. My delivery work included batch scoring, historical data preparation, variable descriptions, and coordination with downstream users.

The small-business V6.5 adaptation addressed a concrete management need: the team wanted to use ratings for differentiated limits and pricing. I adjusted the population distribution across rating tiers and compared risk and coverage before and after the change. The objective was a rating structure suited to business use, rather than an evenly populated set of tiers for its own sake.

## Responding to External Data Drift

As external institutions contracted or exited, the underlying inquiry information changed. The population assigned to the poorer rating tiers declined over time, creating a need to examine both distribution movement and actual risk differentiation.

I investigated historical worst ratings, percentiles, and trend-related alternatives. The selected repair combined the current rating with the worst rating observed during the preceding six months. Where historical records were unavailable, the current rating was retained.

Validation included comparisons across months, old-versus-new rating matrices, customer-segment risk, and incremental-value analysis. The backtests found that the revised September distribution was closer to February's; better-rated groups showed lower risk in the July lending sample; and high-risk coverage expanded at approximately unchanged risk in the poorer groups. Some reversals within existing risk tiers were also reduced.

I examined interactions with credit-withdrawal and liquidity-dependence ratings. The analysis suggested that liquidity-dependence information could further identify higher-risk customers within several multiple-lender tiers, supporting complementary use of the components.

## Results and Continuing Work

The work produced a reusable component with multiple underlying scores, business-specific variants, historical deliveries, and confirmed use across several stages and teams. It also established an ongoing maintenance process connecting changes in external data with rating behavior and business interpretation.

The stability repair's reported improvements are backtest findings. Its documentation recorded a September 24, 2026 release schedule, while actual completion was not confirmed in the supplied record. Percentile and trend experiments also provided inputs for V7, which remained under iteration. I therefore distinguish those development findings from verified production releases and from any realized reduction in credit losses.
