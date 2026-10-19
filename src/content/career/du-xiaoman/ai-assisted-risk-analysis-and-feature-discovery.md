---
title: AI-Assisted Risk Analysis and Feature Discovery
slug: ai-assisted-risk-analysis-and-feature-discovery
summary: >-
  I led the design and implementation of a risk-profile discovery and feature-mining agent using Claude Code and reusable Skills. The application connects business questions, domain knowledge, variable retrieval, feature processing, profile composition, evaluation, and diagnostic iteration. It has entered team trials and produced credit-report feature candidates, with deeper behavioral discovery and incremental-value validation still in progress.
order: 6
---

## Motivation and My Responsibility

Developing risk variables requires repeated transitions between business reasoning, source interpretation, data processing, and evaluation. A plausible idea may already exist in the variable library; a valid SQL query may express the wrong behavior; and a feature with standalone separation may add little to the existing risk system.

I wanted to turn practical experience with these steps into an application that AI could orchestrate and an analyst could review. I led the overall design and implementation and carried out most of the development, using Claude Code and Skills to organize reusable knowledge and executable tools.

The application is a working prototype in team trials. Credit-report feature candidates have been generated, while their depth and incremental business value remain subjects of continued development.

## Designing the End-to-End Workflow

I organized the work into a connected sequence:

1. **Clarify the business question:** specify the suspected risk mechanism, population, decision, and desired output.
2. **Define data and evaluation scope:** identify sources, granularity, time anchors, outcome definitions, and observation windows.
3. **Search existing variables:** retrieve relevant definitions and historical evaluation information before creating new features.
4. **Develop candidates:** translate business ideas into explicit definitions, source fields, parameters, and processing code.
5. **Compose customer profiles:** combine features into interpretable population definitions where the task calls for it.
6. **Check quality and evaluate risk:** validate inputs and then assess coverage, separation, and additional value.
7. **Diagnose and iterate:** distinguish a weak business hypothesis from a source, timing, or processing problem.
8. **Retain results:** preserve definitions, parameters, evidence, and evaluation outcomes for review and reuse.

I represented stage inputs, outputs, and handoffs in Skills, including business confirmation points and the scope of automated execution. The task paths address risk movements, external events, population identification, goal-driven feature discovery, and verification of explicitly specified credit-report rules.

## Engineering Domain Knowledge

An agent needs more than column names. I organized source purposes, field meanings, granularity, source priorities, time constraints, and processing guidance so that generated logic could be checked against business meaning.

The knowledge organization covers credit reports, loan and repayment data, bills, messaging, event logs, tax and invoice information, apps, limit events, and customer conversations. This is a description of domain organization, not a measured claim that every source has been fully integrated and used in production.

For credit reports, I developed a progression from **business scenario → relevant fields → calculation logic → code**. Examples and field lookup help translate a question such as identifying financing dependence into observable account, timing, or inquiry conditions. The system distinguishes features requiring one report from those requiring multiple reports and preserves rule parameters and versions in explicit validation tasks.

This work made experience that would otherwise need to be reexplained in each prompt available as reusable rules and references.

## Existing-Variable Retrieval and Candidate Processing

I organized variable indices and metadata to support search by meaning, keyword, data domain, and historical evaluation information. The purpose is to find and reuse existing information before generating another version of the same variable.

New-candidate paths cover windows, direction and rate of change, volatility, extrema, ratios, and combined conditions. Candidate records carry processing definitions, source information, parameters, and code or SQL. Intermediate signals are kept distinct from the final feature submitted for evaluation.

The existing registry contains historical variables as well as newer work. Its total size therefore cannot be used as the number of features discovered by this project. The confirmed result is a functioning retrieval and processing path and the generation of credit-report candidates during trials.

## Profile Composition and Evaluation

I made profile combinations configurable, including any-condition, all-condition, majority, weighted-score, and threshold combinations. The outputs include a population tag and its definition, making the resulting segment reviewable.

The evaluation tools organize approval, drawdown, and post-loan scenarios and calculate feature distributions, bins, coverage, person- and amount-based delinquency, lift, information value, and KS. Cross-variable analysis helps determine whether a candidate continues to distinguish risk within existing tiers or components.

In the current feature-discovery evaluation configuration, candidates are observed across three time windows and the full population and existing first and second risk tiers, using amount-based FPD7 as the primary measure. The checks consider risk direction, bin ordering, coverage, and sample support. These repeated-window views do not constitute an independent out-of-time holdout, and the default configuration does not automatically include every possible component interaction.

## Making the Evaluation Trustworthy

### Correct Granularity and Timing

Approval, drawdown, and post-loan datasets use different entities and joins. A credit report after a decision must not be treated as information known beforehand, and one-to-many joins can duplicate loans and exposure.

I organized scenario-specific keys, deduplication, risk joins, and time matching. The workflow distinguishes month-end snapshot evaluation from transaction-level evaluation. Event variables are anchored to a transaction and use observations available before it; quality checks examine duplicate keys, timing boundaries, and unusual anchors.

### Mature Labels and Consistent Denominators

Immature outcomes treated as good observations, missing principal, or duplicate totals can produce convincing-looking but misleading risk tables. I included checks for outcome maturity, exposure coverage, and risk linkage, keeping person- and amount-based results separate.

In pivot and rating aggregation, the tools sum the appropriate numerators and denominators before calculating risk rates. Lift uses the baseline corresponding to the selected analysis population. Missing values, total rows, units, and the order of bins are handled explicitly in reporting.

### Additional Value and Population Support

A candidate may mainly repeat existing multiple-lender or liquidity information. I built cross-analysis paths to inspect differences within a baseline bin or existing tier before treating high overall lift as evidence of additional value.

For automated rating exploration, minimum population shares, adjacent-lift differences, and monotonicity constraints help prevent selecting tiny cells with accidental extreme results. Multi-month constraints and interactive review support a more balanced choice, while future samples remain necessary to assess stability.

## Diagnostic Iteration and Evidence Retention

I separated candidate generation, quality acceptance, risk evaluation, and failure diagnosis. A problem with field meaning or timing should trigger a correction to the input or processing path; poor risk separation can instead lead to revisiting the hypothesis, window, or definition.

The workflow retains sources, field mappings, calculation logic, parameters, periods, quality results, and effectiveness records. This helps explain why a candidate failed, supports targeted revisions, and makes later reuse more traceable. Acceptable and traceable results can then be retained in the variable index.

These controls address classes of potential failure. Their presence does not imply that every possible failure actually occurred or that all generated candidates have passed validation.

## Six Reusable Analytical Skills

Alongside the agent, I developed six Skills for repeated analytical work:

1. **Excel pivot heatmaps:** turn variable distribution and risk workbooks into interactive HTML views with date, population, feature, and metric filters.
2. **Excel pivot reports:** produce another reusable reporting path for two-dimensional pivots and exploration, with consistent units, missing values, and bin order.
3. **Standard risk evaluation:** organize sample matching, SQL generation, quality checks, binning, IV/KS, risk, lift, and HTML reporting across business stages.
4. **Cross-variable incremental analysis:** connect feature screening, candidate combinations, cross matrices, manual rating merges, and evaluation of the resulting rating.
5. **Constrained binning search:** explore cutoffs under population-share, adjacent-lift, and monotonicity requirements, including joint constraints across months.
6. **Interactive rating construction:** let an analyst adjust bins, merge cross-matrix cells, add successive rating combinations, and export mappings, configuration, and SQL.

The tools combine repeatable calculation with analyst control. Their individual usage scale, time savings, and degree of integration with the discovery agent have not all been separately measured, so I describe them as a supporting tool portfolio rather than one universally deployed system.

## Applying External-Data Experience

I also distilled external-data evaluation experience into a candidate Skill workflow: requirements, source understanding, historical tests, quality checks, evaluation by data type, component incrementality, integration recommendations, and evidence capture.

The proposed branches distinguish vendor scores, underlying variables, and behavioral tags. Scores require checks on training populations and label meaning; raw fields may need screening or our own model; behavioral tags require careful event, window, and granularity interpretation. All three return to validation on the target customer population.

This methodology builds on completed assessments and integrations from my external-data work. An independent, fully implemented AI Skill for that entire specialization was not established in the supplied record, so it remains a documented workflow and packaging direction.

## Current Results and Next Development Priorities

The application has moved from personal exploration into **team trials**, and the **credit-report path can generate candidate variables**. I implemented the task entry, domain Skills, variable lookup, feature-processing paths, profile combinations, quality checks, evaluation, reporting, and diagnostic feedback that support this capability.

Current discovery is still relatively shallow. Window changes, ratios, differences, and volatility can generate many candidates without capturing a financing mechanism deeply enough. The next priorities are stronger business-semantic reasoning, account- and institution-level relationships, complex timing across reports, and clearer incremental-value tests against existing components.

The demonstrated outcome is an executable and reviewable framework for turning risk expertise into AI-assisted work, with early trial usage and candidate output. Production adoption, the count of validated effective variables, measured efficiency gains, and realized risk improvements require further evidence and are not presented as completed results.
