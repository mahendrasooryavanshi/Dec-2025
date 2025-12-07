How to use this list

Start with the basics (1–20), then move to core algorithmic strategies (21–60), then advanced structures & graph/DP variants (61–100).

For each pattern: implement 2 problems — one easy, one medium/hard.

While practicing, write clean code, think about complexity, and create tests.

Two Pointers (Sorted Array) — merge-like scans from ends or both directions.
Tags: arrays, two-pointers, greedy.

Two Pointers (Unsorted / Sliding Window) — variable window, sum/unique constraints.
Tags: arrays, sliding window.

Sliding Window (Fixed Size) — max/min/average in window size K.
Tags: arrays, window, deque.

Sliding Window (Variable Size) — smallest subarray sum ≥ target, longest subarray constraints.
Tags: arrays, window, two-pointers.

Prefix Sum — precompute sums for O(1) range queries.
Tags: arrays, maths.

Difference Array (Range Updates) — apply range increments efficiently.
Tags: arrays, range update.

Kadane / Max Subarray — maximum contiguous sum.
Tags: arrays, dynamic programming.

Product Except Self — left/right prefix products without division.
Tags: arrays, prefix/suffix.

Dutch National Flag (3-way partition) — sort 0/1/2 or partition by pivot.
Tags: arrays, partitioning.

Partitioning (QuickSelect) — pivot partition for k-th element.
Tags: arrays, selection, quickselect.

Binary Search (Value Space) — search on answer (minimize/maximize).
Tags: binary search, parametric.

Binary Search (Index Space) — classic index-based search on sorted data.
Tags: binary search.

Lower/Upper Bound Templates — first/last occurrence, insertion index.
Tags: binary search.

Two-Sum Hashing — map for complements in linear time.
Tags: hashing, arrays.

Hash-Based Frequency Counting — frequency maps and mode.
Tags: hash map, counting.

Group By Key (Bucketing) — group items by property (e.g., anagrams).
Tags: hashmap, grouping, sorting.

Anagram Grouping / Signature Key — sort or freq signature.
Tags: strings, hashmap.

Sliding Window + Hash (Substring search) — count/occurence in window (e.g., find anagrams).
Tags: strings, window, hashmap.

Rabin-Karp Rolling Hash — substring search using rolling hash.
Tags: strings, hashing.

KMP / Prefix Function — efficient pattern matching using prefix table.
Tags: strings, KMP.

Trie (Prefix Tree) — prefix operations, autocomplete, dictionary.
Tags: trie, strings.

Palindrome Expand / Manacher — longest palindrome substring.
Tags: strings, center expansion, Manacher.

Two-pointer Merge (Sorted Lists/Arrays) — merge k sorted lists/arrays.
Tags: lists, merge, heap.

Heap / Priority Queue (Top-K) — k largest/smallest, streaming.
Tags: heap, priority queue.

Sliding Window Maximum (Deque) — monotonic deque for window max.
Tags: deque, sliding window.

Monotonic Stack (Next Greater/Smaller) — span problems, stock span.
Tags: stack, arrays.

Monotonic Queue for Minimums/Maximums — similar to deque pattern.
Tags: deque.

Stack for Valid Parentheses / Evaluate Expression — bracket & expression parsing.
Tags: stack, strings.

Inorder / Preorder / Postorder Recursion (Trees) — traversal patterns & recursive templates.
Tags: trees, recursion.

Iterative Tree Traversal (Stack / Morris) — simulate recursion or O(1) space traversal.
Tags: trees.

Level Order / BFS on Tree — breadth-first traversal, level sums, zigzag.
Tags: BFS, trees, queue.

DFS (Recursion) on Graph/Tree — backtracking, visit states.
Tags: DFS, graphs, recursion.

Graph BFS Shortest Path (Unweighted) — shortest path in edges.
Tags: graphs, BFS.

Dijkstra (Weighted Shortest Path) — non-negative weights, priority queue.
Tags: graphs, Dijkstra, heap.

Bellman-Ford / Detect Negative Cycle — negative edges, shortest path.
Tags: graphs, DP, Bellman-Ford.

Floyd-Warshall (All-Pairs) — APSP dynamic programming.
Tags: DP, graphs.

Topological Sort / DAG DP — ordering, longest path in DAG.
Tags: graphs, topo sort, DP.

Union-Find (Disjoint Set) — connectivity, Kruskal MST, cycle detection.
Tags: DSU, graphs.

Minimum Spanning Tree (Kruskal / Prim) — MST patterns.
Tags: graphs, greedy, union-find, heap.

Backtracking Template (Subset / Permutation / Combination) — generate combinations/permutations.
Tags: backtracking, recursion.

Subset Sum / Knapsack (0/1) — classic DP for choices.
Tags: DP, knapsack.

Unbounded Knapsack / Coin Change — unlimited items, ways/count.
Tags: DP.

Longest Increasing Subsequence (LIS) — patience sorting / n log n method.
Tags: DP, binary search.

Longest Common Subsequence (LCS) — DP grid.
Tags: DP, strings.

Edit Distance (Levenshtein) — minimum edits DP.
Tags: DP, strings.

Dynamic Programming on Subsequences (DP on indices) — choose/skip patterns.
Tags: DP, recursion.

DP with Bitmasking (TSP, Subset DP) — states as bitmask for small n.
Tags: DP, bitmask.

DP on Trees (Tree DP) — root-based DP (subtree solutions).
Tags: trees, DP.

Greedy Interval Scheduling — select max non-overlapping intervals.
Tags: greedy, sorting.

Activity / Meeting Room Problems — interval partitioning.
Tags: intervals, greedy.

Merge Intervals — union of intervals, overlap handling.
Tags: sorting, intervals.

Insert Interval (Maintain Sorted Intervals) — add & merge.
Tags: intervals.

Reservoir Sampling (Random Sampling) — sample k items from stream.
Tags: randomness, streaming.

Two-phase Approach (Sort then scan) — sort then greedy/scan for many problems.
Tags: sorting, greedy.

Binary Indexed Tree / Fenwick Tree — prefix sums & updates.
Tags: bit/Fenwick, range query.

Segment Tree (Range Queries & Lazy Propagation) — range min/max/sum with updates.
Tags: segment tree.

Order-Statistic Tree / Augmented BST — k-th element, rank queries.
Tags: trees, BST, augmentation.

Suffix Array / Suffix Automaton — substring queries, distinct substrings.
Tags: strings, suffix.

Suffix Tree / Ukkonen — linear substring algorithms (advanced).
Tags: strings, suffix.

Rolling Hash + Double Hashing — avoid collisions in substring matching.
Tags: strings, hashing.

Bit Manipulation Tricks (XOR, bitcount) — parity, unique numbers, subsets.
Tags: bits, math.

Bit DP / Subset Transform — fast zeta transform, subset convolution patterns.
Tags: bitmask, DP, transforms.

Meet-in-the-Middle — split n into two halves (n ≤ 40).
Tags: combinatorics, divide & conquer.

Divide and Conquer (Classic) — merge sort, closest pair of points.
Tags: D&C.

Closest Pair / Geometry via D&C — computational geometry pattern.
Tags: geometry, D&C.

Sweep Line (Geometry / Intervals) — process events sorted by coordinate.
Tags: geometry, events.

Convex Hull (Graham / Monotone Chain) — boundary of point set.
Tags: geometry.

Line Intersection / Segment Trees in Plane — advanced geometry events.
Tags: geometry, segment tree.

Reservoir Partitioning / Quickselect (kth element) — selection in linear time expected.
Tags: quickselect.

Monoid / Segment Tree with custom combine — generic segment structure for custom operations.
Tags: data structures, segment tree.

Persistent Data Structures — persistent segment tree / persistent DSU.
Tags: persistence, DS.

Rolling Window + Frequency (Top-K in stream) — heavy hitters, count-min sketches (approx).
Tags: streaming, sketches.

Memoization & Recursive Top-Down DP — pattern for exponential states to DP.
Tags: DP, memoization.

Tabulation & State Compression — convert recursive DP to iterative.
Tags: DP.

Greedy with Proof (Exchange Argument) — design greedy & prove optimal using exchange.
Tags: greedy, proof technique.

Amortized Analysis Patterns (Stack / Resizing Array) — understand aggregate complexity.
Tags: complexity, amortized.

Rolling Window with MultiSet (Balanced BST) — window min/max with log updates.
Tags: multiset, tree.

Multi-source BFS / 0-1 BFS — BFS from multiple starts; edge-weight 0/1 using deque.
Tags: graphs, BFS, deque.

Max Flow (Edmonds-Karp / Dinic) — flow networks, cut/flow problems.
Tags: graphs, maxflow.

Min-Cost Max-Flow — cost aware flow problems.
Tags: graphs, flow, cost.

Bipartite Matching (Hopcroft–Karp) — matching in bipartite graphs.
Tags: graphs, matching.

Eulerian Path / Circuit — check/create Euler path in directed/undirected graphs.
Tags: graphs, euler.

Hamiltonian Path (Backtracking / Bitmask DP) — NP-hard patterns, small n DP.
Tags: bitmask, DP, backtracking.

String DP Patterns (palindrome partitions, DP over length) — typical string DP templates.
Tags: strings, DP.

Rolling Window + Max-Queue (for Deque problems) — sliding extremum templates.
Tags: deque, window.

Top-K using Min-Heap (Streaming) — keep k best items in O(n log k).
Tags: heap, streaming.

Graph Connectivity + Bridges & Articulation Points — cut vertices/edges detection.
Tags: graphs, DFS, articulation.

Strongly Connected Components (Kosaraju/Tarjan) — SCC decomposition.
Tags: graphs, SCC.

Randomized Algorithms (Quickselect, Randomized hashing) — expected-time algorithms.
Tags: randomness, expected complexity.

Approximation Algorithms & Heuristics (Greedy approximations) — NP-hard practical patterns.
Tags: approximation, greedy.

Cache / LRU / LFU Implementation Patterns — design using linked lists + hashmap or frequency structures.
Tags: design, LRU, hashmap, linked list.

Rate Limiter / Sliding Window Log / Token Bucket — time-window based counters design patterns.
Tags: design, sliding window, queues.

Topological + DP for Scheduling (Critical Path) — scheduling earliest/latest times.
Tags: graphs, DP.

String Automata / Aho-Corasick — multiple pattern matching in text.
Tags: strings, automaton.

Geometric Closest Points / k-NN naive vs optimized — nearest neighbor patterns.
Tags: geometry, kd-tree.

KD-Tree / Spatial Partitioning — spatial queries.
Tags: geometry, trees.

Approximate Counting (HyperLogLog / Bloom Filter concept) — probabilistic sets & distinct counting.
Tags: probabilistic DS, streaming.

Concurrency-safe Algorithmic Patterns (locks, atomics) — high-level patterns for thread-safe counters, work queues.
Tags: concurrency, algorithms.

Immutable Data Structures & Functional Patterns — persistent lists, functional algorithmic approaches.
Tags: functional, persistent.

Problem Reduction / Transformations — map new problem to known archetype (e.g., transform to LIS, to graph, to flow).
Tags: meta-pattern, reduction.
