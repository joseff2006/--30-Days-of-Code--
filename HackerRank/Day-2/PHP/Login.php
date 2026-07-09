<?php

/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 * 1. DOUBLE meal_cost
 * 2. INTEGER tip_percent
 * 3. INTEGER tax_percent
 */

function solve($meal_cost, $tip_percent, $tax_percent) {
    // 1. Calculate tip and tax amounts
    $tip = $meal_cost * ($tip_percent / 100);
    $tax = $meal_cost * ($tax_percent / 100);
    
    // 2. Sum everything to get the total cost
    $total_cost = $meal_cost + $tip + $tax;
    
    // 3. Round to the nearest integer and print followed by a newline
    echo round($total_cost) . "\n";
}

$meal_cost = doubleval(trim(fgets(STDIN)));

$tip_percent = intval(trim(fgets(STDIN)));

$tax_percent = intval(trim(fgets(STDIN)));

solve($meal_cost, $tip_percent, $tax_percent);