<?php

//Script for Rooted in Faith

//Declare variables with the necessary text
$websiteTitle = 'Rooted in Faith';
$siteDescription = "We exist to equip, empower, and engage Christian believers of all ages and backgrounds to live out their faith in the world today.";
$siteTagline = "Rooted in Faith: Planting the seeds of belief in our generation.";
$siteCopyright = "© 2020 Rooted in Faith. All rights reserved.";

//Include necessary libraries
include('header.php');
include('navigation.php');

//Begin page content
echo "<h1>$websiteTitle</h1>";
echo "<h2>Welcome to $websiteTitle</h2>";
echo "<p>$siteDescription</p>";
echo "<p>$siteTagline</p>";
echo "<h3>About Us</h3>";
echo "<p>Rooted in Faith is a Christian outreach ministry that exists to equip, empower, and engage Christian believers of all ages and backgrounds to live out their faith in the world today. Our mission is to bring together Christians from all walks of life to help spread the message of Jesus and grow in their faith. We have a variety of ways to do this, from conferences and Bible studies to local outreach. We strive to provide meaningful resources and opportunities to help Christians become rooted and grounded in their faith.</p>";
echo "<h3>Our Vision</h3>";
echo "<p>Our vision at Rooted in Faith is to become the leading Christian outreach ministry providing meaningful tools and resources to Christians of all ages and backgrounds to help them grow in their faith and live it out in their daily lives. We want to create an environment of love, acceptance, and support for all believers. We're committed to helping believers develop a personal relationship with God, deepening their knowledge and understanding of the Bible, and living out their faith in their everyday lives.</p>";

//Footer
echo "<p>$siteCopyright</p>";

include('footer.php');