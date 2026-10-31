---
title: "Modeling ecDNA Copy Number Dynamics in Cancer Cell Population"
description: "Research at Columbia University Irving Institute for Cancer Dynamics."
---

Location: Columbia University Irving Institute for Cancer Dynamics

Supervisor: Dr. Khanh Dinh

## Introduction

Extrachromosomal DNA (ecDNA) has recently gained significant attention in cancer research, due to its potential impact on tumor biology and therapy outcomes. Over the past few years, studies have unveiled the role of these circular DNA molecules in amplifying oncogenes, driving tumor heterogeneity, and conferring adaptability to cancer cells.

Given these findings, there is a growing interest in developing mathematical models to better understand and predict the dynamics of ecDNA in cancer cell populations. Since the role of ecDNA was discovered only recently, there are still very few papers that focus on modeling its copy number dynamics. Most of the existing mathematical research on the subject remains relatively simple, and we believe that there is room for improvement regarding the impact of copy number on selection.

This research project was based on a single dataset made of the distributions of ecDNA copy number in a cell line at two different time points. Our goal was to produce simulations that matched this reference data as closely as possible. Specifically, we aimed to infer a single selection parameter that quantifies the selective advantage conferred by ecDNA on cell fitness.

To do so, we first explored several models to select the most suitable one. My work focused on one single model inspired by Moran processes. Our final goal was then to infer the selection parameter in our data, which we did using an ABC algorithm.

## 1.1 Biological features of ecDNA in human cancer

Most of the literature on ecDNA focuses on its biological features and impact on cancer growth. Several papers review its known properties, insisting on its role in tumor heterogeneity and oncogene1 amplification. Yet, since ecDNA is a very recent topic, many of its properties remain unknown. This is particularly true regarding its formation, for which a few models have been proposed without experimental confirmation. While we initially wanted to incorporate the formation of ecDNA into our model, we soon realized that it would not be feasible nor necessary.

Indeed, most ecDNAs impose a metabolic load on the cell, leading to its rapid loss. However, in rare events, an ecDNA can be formed with a proliferative element such as an oncogene, providing a selective advantage to the cell. The goal of this project is to model the dynamics of such ecDNAs, which could have a significant impact on population evolution in the long term.

Despite the limited understanding of ecDNA, there is a consensus that it plays a potentially significant role in cancer evolution. First, it has been identified as a major carrier of amplified oncogenes and is more open than chromosomal DNA, resulting in increased transcriptional activity. ecDNA has also been found in very high copy numbers, leading to significant overexpression of the genes it carries. Finally, ecDNA molecules often form clusters or hubs, further driving oncogene expression.

All these findings suggest that cells with higher ecDNA copy numbers might have a greater fitness, meaning a selective advantage over other cells in the population. As to how cells can reach such high ecDNA counts, recent discoveries indicate that ecDNA copies are randomly segregated among daughter cells during cell division, leading to high copy number variability.

## 1.2 Random segregation of ecDNA during cell division

One of the key studies investigating the mathematics behind ecDNA dynamics. The main point of this paper was to prove the random segregation of ecDNA in human cancer cells, with equal probabilities for daughter cells to inherit each copy. Figure 1 shows the possible outcomes of such segregation, which can result in strong copy number heterogeneity. This randomness can lead to exceptionally high ecDNA counts, which are not reachable through chromosomal segregation. Given that ecDNA is a major carrier of amplified oncogenes, this may significantly impact the fitness of the cells, further contributing to cancer progression.

<img src="../media/ecdna-figure-1.png" alt="Project research figure" />

## 2.1 Overview of Reference Data

Since ecDNA is a relatively new topic, very limited data was available on ecDNA counts. Fortunately, Ben Wesley, a PhD student at IICD, had recently worked on ecDNA and was able to share a small dataset2 with us. This dataset was built using single-cell DNA sequencing, and it includes the copy number distribution of the organoid CAM277 at two different time points, referred to as “passages”. These distributions are shown in Figure 2

<img src="../media/ecdna-figure-2.png" alt="Project research figure" />

## 2.2 Some Comments

Still, several significant questions remained. First, we do not know when the first cell with ecDNA appeared in the population. Ben told us to assume that it emerged around passage-5, which we did. But we soon realized that the starting point was a critical parameter that should ideally also be inferred from the data. Moreover, we have no idea what the size of the population was at each time point. We only know that the number of cells for which we have ecDNA counts is 355 at passage 4, and 581 at passage 15. Finally, we do not know much about the sequencing method and its uncertainties. The sequencing detects ecDNA copies, so naturally we do not have any detection for cells without any copy. But for very small copy numbers (less than 10), we are not sure whether we can trust the data. This is why we decided, for distance computations later on, to consider only copy numbers larger than 10^3.

## 3.1 Fundamentals of Moran processes

The Moran process is a stochastic model used to simulate genetic drift, devised at first for populations with two alleles A and a. Initially, each of the N individuals carries one of the two alleles. Then at every generation, one individual is chosen at random to reproduce, producing an offspring that replaces another individual chosen randomly in the population.

While Moran processes can be neutral, they can also model selective pressures in reproduction. In such cases, an individual’s likelihood of reproduction is determined by its relative fitness in the population, referring to its ability to proliferate. Such models have been extensively studied, leading to well-known theoretical results, including the probability of fixation of an allele.

Beyond the basic two-allele scenario, Moran processes have been generalized to multi-type Moran models, accommodating more than two possible genetic traits within a population. This extension finds applications in various fields, including modeling cell populations where different cell types interact and compete over generations.

Furthermore, in the standard Moran process, both the reproducing individual and the one being replaced are chosen randomly through two independent draws with replacement. This allows for the same individual to be selected for both events. However, an alternative approach consists in defining a Moran process without replacement, where the order in which reproduction (birth) and replacement (death) events occur becomes significant. We decided to use a Moran death-birth process, in which we pick the cell to die before selecting the cell to divide. To sum up, without considering the random distribution of ecDNA copies among daughter cells, the model follows the pattern shown in Figure 3 below.

<img src="../media/ecdna-figure-3.jpg" alt="Project research figure" />

Although not implemented in our model, it is worth mentioning that Moran processes have been extended to populations with spatial structures, where individuals are represented as vertices of a graph. In this framework, each individual can replace only one of its neighbors, leading to fixation probabilities that heavily rely on the graph’s structure.

## 4.2 Model description

In our Moran model for ecDNA dynamics, we consider a population of cells with a constant size N, where each cell carries a certain number of copies of ecDNA. The model is presented schematically in Figure 5, and formal mathematical definition is given in 4.3. The key distinction from typical Moran processes is that ecDNA copies are randomly distributed between daughter cells. As a result, in most cases, the daughters will not share the same profile as their mother. Our model proceeds in discrete time steps, and each step is composed of one cell death followed by one cell division:

- **Cell death:** A cell is selected for death uniformly at random, and removed from the population.
- **Cell division:** A cell is picked for division at random among the remaining cells, proportionally to fitness (see 4.4 for considerations on fitness functions). During division, the copies of the mother cell are doubled and shared randomly between its daughter cells.

<img src="../media/ecdna-figure-4.png" alt="Project research figure" />

## 4.3 Mathematical notations and formulas

The more specific description and code is not finished yet.
