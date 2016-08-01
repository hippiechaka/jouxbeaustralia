$(document).ready(function(){


  $('.parallax-window').parallax();  
  $('.slideHome').owlCarousel({
    //smartSpeed:450,
	singleItem: true,
    pagination: true,
    loop: true,
    margin: 0,
    nav: true,
    controls: true,
    items: 1,
    slideSpeed: 300,
    paginationSpeed: 400,
    //autoPlay: 3000, //autoplay n 3 sec.

    autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
    
    navText: [
        "<i class='fa fa-angle-left' aria-hidden='true'></i>",
        "<i class='fa fa-angle-right' aria-hidden='true'></i>"],


    });

    $(".next").click(function() {
        owl.trigger('owl.next');
    })
    $(".prev").click(function() {
        owl.trigger('owl.prev');
    })



    var awesome = new Awesomplete('input[type="text"]', {
        list: [
//
//  BANGLES
//
'se-001 - Bangles',
'se-002 - Bangles',
'se-003 - Bangles',
'se-004 - Bangles',
'se-005 - Bangles',
'se-006 - Bangles',
'se-007 - Bangles',
'se-008 - Bangles',
'se-009 - Bangles',
'se-010 - Bangles',
'se-011 - Bangles',
'se-012 - Bangles',
'se-013 - Bangles',
'se-014 - Bangles',
'se-015 - Bangles',
'se-016 - Bangles',
'se-017 - Bangles',
'se-018 - Bangles',
'se-019 - Bangles',
'se-020 - Bangles',
'se-021 - Bangles',
'se-023 - Bangles',
'se-025 - Bangles',
'se-026 - Bangles',
'se-027 - Bangles',
'se-028 - Bangles',
'se-029 - Bangles',
'se-030 - Bangles',
'se-031 - Bangles',
'se-032 - Bangles',
'se-033 - Bangles',
'se-034 - Bangles',
'se-035 - Bangles',
'se-036 - Bangles',
'se-035 - Bangles',
'se-035l - Bangles',
'se-036 - Bangles',
'se-036l - Bangles',
//
// BRACELETS
//
'scc-032 - Bracelets',
'scc-033 - Bracelets',
'scd-001 - Bracelets',
'scd-002 - Bracelets',
'scd-003 - Bracelets',
'scd-004 - Bracelets',
'scd-005 - Bracelets',
'scd-006 - Bracelets',
'scd-007 - Bracelets',
'scd-008 - Bracelets',
'scd-009 - Bracelets',
'scd-010 - Bracelets',
'scd-0010 - Bracelets',
'scd-011 - Bracelets',
'scd-012 - Bracelets',
'scd-013 - Bracelets',
'scd-014 - Bracelets',
'scd-015 - Bracelets',
'scd-016 - Bracelets',
'scd-017 - Bracelets',
'scd-018 - Bracelets',
'scd-019 - Bracelets',
'scd-020 - Bracelets',
'scd-021 - Bracelets',
'scd-022 - Bracelets',
'scd-023 - Bracelets',
'scd-024 - Bracelets',
'scd-025 - Bracelets',
'scd-026 - Bracelets',
'scd-027 - Bracelets',
'scd-028 - Bracelets',
'scd-029 - Bracelets',
'scd-030 - Bracelets',
'scd-031 - Bracelets',
'scd-032 - Bracelets',
'scd-033 - Bracelets',
'scd-034 - Bracelets',
'scd-035 - Bracelets',
'scd-036 - Bracelets',
'scd-037 - Bracelets',
'scd-038 - Bracelets',
'scd-039 - Bracelets',
'scd-040 - Bracelets',
'scg-001 - Bracelets',
'scg-002 - Bracelets',
'scg-003 - Bracelets',
'scg-004 - Bracelets',
'scg-005 - Bracelets',
'scg-006 - Bracelets',
'scg-007 - Bracelets',
'scg-008 - Bracelets',
'scg-009 - Bracelets',
'scg-010 - Bracelets',
'scg-011 - Bracelets',
'scg-012 - Bracelets',
'scg-013 - Bracelets',
'scg-014 - Bracelets',
//
// CHAIN
//
'cd-001 - Chain Necklaces',
'cd-002 - Chain Necklaces',
'cd-003 - Chain Necklaces',
'cd-004 - Chain Necklaces',
'cd-005 - Chain Necklaces',
'cd-006 - Chain Necklaces',
'cd-007 - Chain Necklaces',
'cd-008 - Chain Necklaces',
'cd-009 - Chain Necklaces',
'cd-010 - Chain Necklaces',
'cd-011 - Chain Necklaces',
'cd-012 - Chain Necklaces',
'cd-013 - Chain Necklaces',
'cd-014 - Chain Necklaces',
'cd-015 - Chain Necklaces',
'cd-016 - Chain Necklaces',
'cd-018 - Chain Necklaces',
'cd-019 - Chain Necklaces',
'cd-021 - Chain Necklaces',
'cd-022 - Chain Necklaces',
'cd-023 - Chain Necklaces',
'cd-024 - Chain Necklaces',
'cd-025 - Chain Necklaces',
'cd-026 - Chain Necklaces',
'cd-027 - Chain Necklaces',
'cd-028 - Chain Necklaces',
'cd-029 - Chain Necklaces',
'cd-030 - Chain Necklaces',
'cd-031 - Chain Necklaces',
'cd-032 - Chain Necklaces',
'cd-033 - Chain Necklaces',
'cd-034 - Chain Necklaces',
//
// EARRINGS
//
'ar-001 - Earrings',
'ar-002 - Earrings',
'ar-003 - Earrings',
'ar-004 - Earrings',
'ar-005 - Earrings',
'ar-006 - Earrings',
'ar-007 - Earrings',
'ar-008 - Earrings',
'ar-009 - Earrings',
'ar-010 - Earrings',
'ar-011 - Earrings',
'ar-012 - Earrings',
'ar-013 - Earrings',
'ar-014 - Earrings',
'ar-015 - Earrings',
'ar-016 - Earrings',
'ar-017 - Earrings',
'ar-018 - Earrings',
'ar-019 - Earrings',
'ar-020 - Earrings',
'ar-021 - Earrings',
'ar-022 - Earrings',
'ar-023 - Earrings',
'ar-024 - Earrings',
'ar-025 - Earrings',
'ar-026 - Earrings',
'ar-027 - Earrings',
'ar-028 - Earrings',
'ar-029 - Earrings',
'ar-030 - Earrings',
'ar-031 - Earrings',
'ar-032 - Earrings',
'ar-034 - Earrings',
'ar-035 - Earrings',
'ar-036 - Earrings',
'ar-037 - Earrings',
'ar-038 - Earrings',
'ar-039 - Earrings',
'ar-040 - Earrings',
'ar-041 - Earrings',
'ar-042 - Earrings',
'ar-043 - Earrings',
'ar-050 - Earrings',
'ar-052 - Earrings',
'ar-053 - Earrings',
'ar-054 - Earrings',
'ar-055 - Earrings',
'ar-056 - Earrings',
'ar-057 - Earrings',
'ar-058 - Earrings',
'ar-063-ar-064 - Earrings',
'ar-063 - Earrings',
'ar-064 - Earrings',
'ar-065 - Earrings',
'ar-071-ar-070-ar-069 - Earrings',
'ar-073 - Earrings',
'ar-075 - Earrings',
'ar-076 - Earrings',
'ar-077 - Earrings',
'ar-078 - Earrings',
'ar-079 - Earrings',
'ar-080 - Earrings',
'ar-084 - Earrings',
'ar-085 - Earrings',
'ar-086 - Earrings',
'ar-087 - Earrings',
'ar-088 - Earrings',
'ar-089 - Earrings',
'ar-091 - Earrings',
'ar-091s - Earrings',
'ar-092 - Earrings',
'ar-093 - Earrings',
'ar-094 - Earrings',
'ar-095 - Earrings',
'ar-096 - Earrings',
'ar-097 - Earrings',
'ar-098 - Earrings',
'ar-099 - Earrings',
'ar-100 - Earrings',
'ar-101 - Earrings',
'ar-102 - Earrings',
'ar-103 - Earrings',
'ar-104 - Earrings',
'ar-105 - Earrings',
'ar-117 - Earrings',
'ar-118 - Earrings',
'ar-119 - Earrings',
'ar-120 - Earrings',
'ar-121 - Earrings',
'ar-122 - Earrings',
'ar-123 - Earrings',
'ar-124 - Earrings',
'ar-125 - Earrings',
'ar-126 - Earrings',
'ar-127 - Earrings',
'ar-128 - Earrings',
'ar-129 - Earrings',
'ar-130 - Earrings',
'ar-131 - Earrings',
'ar-132 - Earrings',
'ar-133 - Earrings',
'ar-134 - Earrings',
'ar-135 - Earrings',
'ar-136 - Earrings',
'ar-137 - Earrings',
'ar-138 - Earrings',
'ar-139 - Earrings',
'ar-140 - Earrings',
'ar-141 - Earrings',
'ar-142 - Earrings',
'ar-143 - Earrings',
'ar-144 - Earrings',
'ar-145 - Earrings',
'ar-146 - Earrings',
'ar-148 - Earrings',
'ar-149 - Earrings',
'ar-150 - Earrings',
'ar-151 - Earrings',
'ar-152 - Earrings',
'ar-155 - Earrings',
'ar-156 - Earrings',
'ar-157 - Earrings',
'ar-158 - Earrings',
'ar-159 - Earrings',
'ar-160 - Earrings',
'ar-161 - Earrings',
'ar-162 - Earrings',
'ar-163 - Earrings',
'ar-164 - Earrings',
'ar-165 - Earrings',
'ar-166 - Earrings',
'ar-167 - Earrings',
'ar-168 - Earrings',
'ar-169 - Earrings',
'ar-170 - Earrings',
'ar-171 - Earrings',
'ar-172 - Earrings',
'ar-173 - Earrings',
'ar-174 - Earrings',
'ar-175 - Earrings',
'ar-182 - Earrings',
'ar-183 - Earrings',
'ar-184 - Earrings',
'ar-185 - Earrings',
'ar-186 - Earrings',
'ar-187 - Earrings',
'ar-188 - Earrings',
'ar-189 - Earrings',
'ar-190 - Earrings',
'ar-191 - Earrings',
'ar-192 - Earrings',
'ar-193 - Earrings',
'ar-194 - Earrings',
'ar-195 - Earrings',
'ar-196 - Earrings',
'ar-198 - Earrings',
'ar-199 - Earrings',
'ar-200 - Earrings',
'ar-201 - Earrings',
'ar-203 - Earrings',
'ar-204 - Earrings',
'ar-205 - Earrings',
'ar-206 - Earrings',
'ar-207 - Earrings',
'ar-208 - Earrings',
'ar-209 - Earrings',
'ar-210 - Earrings',
'ar-211 - Earrings',
'ar-212 - Earrings',
'ar-213 - Earrings',
'ar-214 - Earrings',
'ar-215 - Earrings',
'ar-217 - Earrings',
'ar-218 - Earrings',
'ar-223 - Earrings',
'ar-224 - Earrings',
'ar-226 - Earrings',
'ar-227 - Earrings',
'ar-229 - Earrings',
'ar-230 - Earrings',
'ar-233 - Earrings',
'ar-234 - Earrings',
'ar-235 - Earrings',
'ar-236 - Earrings',
'ar-237 - Earrings',
'ar-238 - Earrings',
'ar-261 - Earrings',
'ar-264 - Earrings',
'ar-266 - Earrings',
'ar-267 - Earrings',
'ar-268 - Earrings',
'ar-269 - Earrings',
'ar-270 - Earrings',
'ar-272 - Earrings',
'ar-273 - Earrings',
'ar-274 - Earrings',
'ar-275 - Earrings',
'ar-276 - Earrings',
'ar-277 - Earrings',
'ar-278 - Earrings',
'ar-280 - Earrings',
'ar-281 - Earrings',
'ar-282 - Earrings',
'ar-283 - Earrings',
'bq-001 - Earrings',
'bq-002 - Earrings',
'bq-003 - Earrings',
'bq-006 - Earrings',
'bq-008 - Earrings',
'bq-009 - Earrings',
'bq-010 - Earrings',
'bq-011 - Earrings',
'bq-012-bq-013 - Earrings',
'bq-036 - Earrings',
'bq-037 - Earrings',
'bq-038 - Earrings',
'bq-039 - Earrings',
'bq-040 - Earrings',
'bq-041 - Earrings',
'bq-042 - Earrings',
'bq-043 - Earrings',
'bq-044 - Earrings',
'bq-045 - Earrings',
'bq-046 - Earrings',
'bq-047 - Earrings',
'bq-048 - Earrings',
'bq-049 - Earrings',
'bq-050 - Earrings',
'bq-051 - Earrings',
'bq-052 - Earrings',
'bq-053 - Earrings',
'bq-054 - Earrings',
'bq-055 - Earrings',
'bq-056 - Earrings',
'bq-057 - Earrings',
'bq-058 - Earrings',
'bq-059 - Earrings',
'bq-060 - Earrings',
'bq-063 - Earrings',
'bq-064 - Earrings',
'bq-065 - Earrings',
'bq-066 - Earrings',
'bq-067 - Earrings',
'bq-068 - Earrings',
'bq-069 - Earrings',
'bq-070 - Earrings',
'bq-071 - Earrings',
'bq-072 - Earrings',
'bq-073 - Earrings',
'bq-077 - Earrings',
'bq-078 - Earrings',
'bq-079 - Earrings',
'bq-080 - Earrings',
'bq-081 - Earrings',
'bq-082 - Earrings',
'bq-083 - Earrings',
'bq-084 - Earrings',
'bq-085 - Earrings',
'bq-086 - Earrings',
'bq-087 - Earrings',
'bq-088 - Earrings',
'bq-089 - Earrings',
'bq-090 - Earrings',
'bq-091 - Earrings',
'bq-092 - Earrings',
'bq-093 - Earrings',
'bq-094 - Earrings',
'bq-095 - Earrings',
'bq-096 - Earrings',
'bq-097 - Earrings',
'bq-100 - Earrings',
'bq-101 - Earrings',
'bq-102 - Earrings',
'bq-103 - Earrings',
'bq-104 - Earrings',
'bq-105 - Earrings',
'bq-106 - Earrings',
'bq-108 - Earrings',
'bq-109 - Earrings',
'bq-110 - Earrings',
'bq-111 - Earrings',
'bq-112 - Earrings',
'bq-113 - Earrings',
'bq-114 - Earrings',
'bq-115 - Earrings',
'bq-116 - Earrings',
'bq-117 - Earrings',
'bq-118 - Earrings',
'bq-119 - Earrings',
'bq-120 - Earrings',
'bq-121 - Earrings',
'bq-122 - Earrings',
'bq-123 - Earrings',
'bq-131 - Earrings',
'bq-132 - Earrings',
'bq-133 - Earrings',
'bq-134 - Earrings',
'bq-135 - Earrings',
'bq-136 - Earrings',
'bq-137 - Earrings',
'bq-138 - Earrings',
'bq-140 - Earrings',
'bq-141 - Earrings',
'bq-142 - Earrings',
'bq-143 - Earrings',
'bq-144 - Earrings',
'bq-145 - Earrings',
'bq-146 - Earrings',
'bq-147 - Earrings',
'bq-148 - Earrings',
'bq-149 - Earrings',
'ar-160 - Earrings',
'ar-161 - Earrings',
'ar-162 - Earrings',
'ar-163 - Earrings',
//
// PENDANTS
//
'dj-001 - Pendants',
'dj-002 - Pendants',
'dj-003 - Pendants',
'dj-004 - Pendants',
'dj-005 - Pendants',
'dj-006 - Pendants',
'dj-007 - Pendants',
'dj-008 - Pendants',
'dj-009 - Pendants',
'dj-010 - Pendants',
'dj-011 - Pendants',
'dj-012 - Pendants',
'dj-013 - Pendants',
'dj-071 - Pendants',
'dj-073 - Pendants',
'dj-074 - Pendants',
'dj-075 - Pendants',
'dj-076 - Pendants',
'dj-077 - Pendants',
'dj-078 - Pendants',
'dj-079 - Pendants',
'dj-080 - Pendants',
'dj-125 - Pendants',
'dj-129 - Pendants',
'dj-130 - Pendants',
'dj-132 - Pendants',
'dj-133 - Pendants',
'dj-134 - Pendants',
'dj-135 - Pendants',
'dj-136 - Pendants',
'dj-137 - Pendants',
'dj-138 - Pendants',
'dj-139 - Pendants',
'dj-140 - Pendants',
'dj-141 - Pendants',
'dj-142 - Pendants',
'dj-143 - Pendants',
'dj-144 - Pendants',
'dj-145 - Pendants',
'dj-146 - Pendants',
'dj-147 - Pendants',
'dj-148 - Pendants',
'dj-149 - Pendants',
'dj-150 - Pendants',
'dj-155 - Pendants',
'dj-156 - Pendants',
'dj-157 - Pendants',
'dj-158 - Pendants',
'dj-159 - Pendants',
'dj-160 - Pendants',
'dj-161 - Pendants',
'dj-163 - Pendants',
'dj-164 - Pendants',
'dj-165 - Pendants',
'dj-166 - Pendants',
'dj-167 - Pendants',
'dj-168 - Pendants',
'dj-169 - Pendants',
'dj-171 - Pendants',
'dj-172 - Pendants',
'dj-173 - Pendants',
'dj-174 - Pendants',
'dj-175 - Pendants',
'dj-176 - Pendants',
'dj-177 - Pendants',
'dj-178 - Pendants',
'dj-179 - Pendants',
'dj-180 - Pendants',
'dj-181 - Pendants',
'dj-182 - Pendants',
'dj-262 - Pendants',
'dj-264 - Pendants',
'dj-265 - Pendants',
'dj-266 - Pendants',
'dj-267 - Pendants',
'dj-268 - Pendants',
'dj-269 - Pendants',
'dj-270 - Pendants',
'dj-271 - Pendants',
'dj-272 - Pendants',
'dj-273 - Pendants',
'dj-274 - Pendants',
'dj-275 - Pendants',
'dj-276 - Pendants',
'dj-277 - Pendants',
'dj-278 - Pendants',
'dj-279 - Pendants',
'dj-280 - Pendants',
'dj-281 - Pendants',
'dj-282 - Pendants',
'dj-283 - Pendants',
'dj-284 - Pendants',
'dj-285 - Pendants',
'dj-286 - Pendants',
'dj-287 - Pendants',
'dj-288 - Pendants',
'dj-289 - Pendants',
'dj-290 - Pendants',
'dj-291 - Pendants',
'dj-299 - Pendants',
'dj-301 - Pendants',
'dj-302 - Pendants',
'dj-363 - Pendants',
'dj-364 - Pendants',
'dj-365 - Pendants',
'dj-366 - Pendants',
'dj-367 - Pendants',
'dj-368 - Pendants',
'dj-369 - Pendants',
'dj-370 - Pendants',
'dj-371 - Pendants',
'dj-372 - Pendants',
'dj-373 - Pendants',
'dj-387 - Pendants',
'dj-388 - Pendants',
'dj-389 - Pendants',
'dj-390 - Pendants',
'dj-391 - Pendants',
'dj-392 - Pendants',
'dj-393 - Pendants',
'dj-394 - Pendants',
'dj-395 - Pendants',
'dj-396 - Pendants',
'dj-398 - Pendants',
'dj-399 - Pendants',
'dj-400 - Pendants',
'dj-407 - Pendants',
'dj-415 - Pendants',
'dj-433 - Pendants',
'dj-436 - Pendants',
'dj-437 - Pendants',
'dj-438 - Pendants',
'dj-441 - Pendants',
'dj-442 - Pendants',
'dj-444 - Pendants',
'dj-445 - Pendants',
'dj-446 - Pendants',
'dj-447 - Pendants',
'dj-448 - Pendants',
'dj-449 - Pendants',
'dj-450 - Pendants',
'dj-451 - Pendants',
'dj-452 - Pendants',
'dj-454 - Pendants',
'dj-455 - Pendants',
'dj-456 - Pendants',
'dj-457 - Pendants',
'dj-458 - Pendants',
'dj-459 - Pendants',
'dj-460 - Pendants',
'dj-461 - Pendants',
'dj-462 - Pendants',
'dj-463 - Pendants',
'dj-496 - Pendants',
'dj-497 - Pendants',
'dj-498 - Pendants',
'dj-499 - Pendants',
'dj-500 - Pendants',
'dj-515 - Pendants',
'dj-516 - Pendants',
'dj-517 - Pendants',
'dj-518 - Pendants',
'dj-519 - Pendants',
'dj-520 - Pendants',
'dj-521 - Pendants',
'dj-528 - Pendants',
//
//RELIGIOUS
//
'an-087 - Religious',
'an-158 - Religious',
'an-161 - Religious',
'an-168 - Religious',
'an-170 - Religious',
'an-171 - Religious',
'an-172 - Religious',
'an-175 - Religious',
'an-176 - Religious',
'an-178 - Religious',
'an-199 - Religious',
'an-220 - Religious',
'an-221 - Religious',
'an-236 - Religious',
'an-237 - Religious',
'an-238 - Religious',
'an-239 - Religious',
'an-240 - Religious',
'an-241 - Religious',
'an-242 - Religious',
'an-248 - Religious',
'ar-044 - Religious',
'ar-045 - Religious',
'ar-046 - Religious',
'ar-047 - Religious',
'ar-048 - Religious',
'ar-049 - Religious',
'ar-059 - Religious',
'ar-060 - Religious',
'ar-061 - Religious',
'ar-062 - Religious',
'ar-081 - Religious',
'ar-082 - Religious',
'ar-083 - Religious',
'ar-090 - Religious',
'ar-176 - Religious',
'ar-177 - Religious',
'ar-178 - Religious',
'ar-179 - Religious',
'ar-180 - Religious',
'ar-181 - Religious',
'ar-220 - Religious',
'ar-221 - Religious',
'bq-014 - Religious',
'bq-015 - Religious',
'bq-016 - Religious',
'bq-017 - Religious',
'bq-018 - Religious',
'bq-019 - Religious',
'bq-020 - Religious',
'dj-014 - Religious',
'dj-015 - Religious',
'dj-016 - Religious',
'dj-017 - Religious',
'dj-018 - Religious',
'dj-019 - Religious',
'dj-020 - Religious',
'dj-021 - Religious',
'dj-022 - Religious',
'dj-023 - Religious',
'dj-024 - Religious',
'dj-025 - Religious',
'dj-026 - Religious',
'dj-028 - Religious',
'dj-029 - Religious',
'dj-030 - Religious',
'dj-031 - Religious',
'dj-032 - Religious',
'dj-033 - Religious',
'dj-034 - Religious',
'dj-035 - Religious',
'dj-036 - Religious',
'dj-037 - Religious',
'dj-038 - Religious',
'dj-039 - Religious',
'dj-041 - Religious',
'dj-042 - Religious',
'dj-043 - Religious',
'dj-044 - Religious',
'dj-045 - Religious',
'dj-046 - Religious',
'dj-051 - Religious',
'dj-052 - Religious',
'dj-053 - Religious',
'dj-054 - Religious',
'dj-055 - Religious',
'dj-057 - Religious',
'dj-058 - Religious',
'dj-060 - Religious',
'dj-061 - Religious',
'dj-062 - Religious',
'dj-063 - Religious',
'dj-064 - Religious',
'dj-065 - Religious',
'dj-066 - Religious',
'dj-067 - Religious',
'dj-068 - Religious',
'dj-069 - Religious',
'dj-070 - Religious',
'dj-071 - Religious',
'dj-081 - Religious',
'dj-082 - Religious',
'dj-083 - Religious',
'dj-084 - Religious',
'dj-085 - Religious',
'dj-086 - Religious',
'dj-087 - Religious',
'dj-088 - Religious',
'dj-092 - Religious',
'dj-093 - Religious',
'dj-094 - Religious',
'dj-096 - Religious',
'dj-097 - Religious',
'dj-098 - Religious',
'dj-099 - Religious',
'dj-100 - Religious',
'dj-101 - Religious',
'dj-102 - Religious',
'dj-103 - Religious',
'dj-104 - Religious',
'dj-110 - Religious',
'dj-111 - Religious',
'dj-112 - Religious',
'dj-113 - Religious',
'dj-114 - Religious',
'dj-115 - Religious',
'dj-116 - Religious',
'dj-117 - Religious',
'dj-151 - Religious',
'dj-185 - Religious',
'dj-186 - Religious',
'dj-187 - Religious',
'dj-188 - Religious',
'dj-189 - Religious',
'dj-190 - Religious',
'dj-191 - Religious',
'dj-192 - Religious',
'dj-193 - Religious',
'dj-194 - Religious',
'dj-195 - Religious',
'dj-196 - Religious',
'dj-197 - Religious',
'dj-198 - Religious',
'dj-199 - Religious',
'dj-200 - Religious',
'dj-201 - Religious',
'dj-202 - Religious',
'dj-207 - Religious',
'dj-208 - Religious',
'dj-209 - Religious',
'dj-210 - Religious',
'dj-211 - Religious',
'dj-212 - Religious',
'dj-213 - Religious',
'dj-214 - Religious',
'dj-215 - Religious',
'dj-217 - Religious',
'dj-218 - Religious',
'dj-219 - Religious',
'dj-220 - Religious',
'dj-221 - Religious',
'dj-222 - Religious',
'dj-223 - Religious',
'dj-224 - Religious',
'dj-225 - Religious',
'dj-226 - Religious',
'dj-227 - Religious',
'dj-228 - Religious',
'dj-229 - Religious',
'dj-230 - Religious',
'dj-231 - Religious',
'dj-232 - Religious',
'dj-233 - Religious',
'dj-234 - Religious',
'dj-235 - Religious',
'dj-236 - Religious',
'dj-237 - Religious',
'dj-238 - Religious',
'dj-239 - Religious',
'dj-241 - Religious',
'dj-242 - Religious',
'dj-243 - Religious',
'dj-245 - Religious',
'dj-246 - Religious',
'dj-247 - Religious',
'dj-248 - Religious',
'dj-249 - Religious',
'dj-251 - Religious',
'dj-252 - Religious',
'dj-253 - Religious',
'dj-254 - Religious',
'dj-256 - Religious',
'dj-257 - Religious',
'dj-258 - Religious',
'dj-259 - Religious',
'dj-260 - Religious',
'dj-261 - Religious',
'dj-303 - Religious',
'dj-304 - Religious',
'dj-305 - Religious',
'dj-306 - Religious',
'dj-307 - Religious',
'dj-308 - Religious',
'dj-309 - Religious',
'dj-310 - Religious',
'dj-311 - Religious',
'dj-312 - Religious',
'dj-313 - Religious',
'dj-314 - Religious',
'dj-315 - Religious',
'dj-316 - Religious',
'dj-317 - Religious',
'dj-318 - Religious',
'dj-319 - Religious',
'dj-320 - Religious',
'dj-321 - Religious',
'dj-322 - Religious',
'dj-323 - Religious',
'dj-324 - Religious',
'dj-325 - Religious',
'dj-326 - Religious',
'dj-327 - Religious',
'dj-328 - Religious',
'dj-329 - Religious',
'dj-330 - Religious',
'dj-331 - Religious',
'dj-332 - Religious',
'dj-333 - Religious',
'dj-334 - Religious',
'dj-335 - Religious',
'dj-336 - Religious',
'dj-337 - Religious',
'dj-338 - Religious',
'dj-339 - Religious',
'dj-340 - Religious',
'dj-341 - Religious',
'dj-342 - Religious',
'dj-343 - Religious',
'dj-344 - Religious',
'dj-345 - Religious',
'dj-346 - Religious',
'dj-347 - Religious',
'dj-348 - Religious',
'dj-349 - Religious',
'dj-350 - Religious',
'dj-351 - Religious',
'dj-352 - Religious',
'dj-353 - Religious',
'dj-354 - Religious',
'dj-355 - Religious',
'dj-356 - Religious',
'dj-357 - Religious',
'dj-358 - Religious',
'dj-359 - Religious',
'dj-360 - Religious',
'dj-361 - Religious',
'dj-362 - Religious',
'dj-374 - Religious',
'dj-375 - Religious',
'dj-376 - Religious',
'dj-377 - Religious',
'dj-378 - Religious',
'dj-379 - Religious',
'dj-380 - Religious',
'dj-381 - Religious',
'dj-382 - Religious',
'dj-383 - Religious',
'dj-384 - Religious',
'dj-385 - Religious',
'dj-386 - Religious',
'dj-397 - Religious',
'dj-401 - Religious',
'dj-402 - Religious',
'dj-403 - Religious',
'dj-404 - Religious',
'dj-405 - Religious',
'dj-406 - Religious',
'dj-408 - Religious',
'dj-409 - Religious',
'dj-410 - Religious',
'dj-411 - Religious',
'dj-413 - Religious',
'dj-414 - Religious',
'dj-422 - Religious',
'dj-431 - Religious',
'dj-432 - Religious',
'dj-434 - Religious',
'dj-435 - Religious',
'dj-443 - Religious',
'dj-468 - Religious',
'dj-469 - Religious',
'dj-470 - Religious',
'dj-471 - Religious',
'dj-472 - Religious',
'dj-473 - Religious',
'dj-474 - Religious',
'dj-475 - Religious',
'dj-476 - Religious',
'dj-477 - Religious',
'dj-478 - Religious',
'dj-479 - Religious',
'dj-480 - Religious',
'dj-481 - Religious',
'dj-482 - Religious',
'dj-484 - Religious',
'dj-485 - Religious',
'dj-486 - Religious',
'dj-487 - Religious',
'dj-488 - Religious',
'dj-489 - Religious',
'dj-490 - Religious',
'dj-491 - Religious',
'dj-492 - Religious',
'dj-493 - Religious',
'dj-494 - Religious',
'dj-495 - Religious',
'dj-513 - Religious',
'dj-514 - Religious',
'dj-523 - Religious',
'dj-524 - Religious',
'dj-525 - Religious',
'dj-526 - Religious',
'dj-527 - Religious',
'rs-010 - Religious',
'rs-011 - Religious',
'rs-013 - Religious',
'rs-014 - Religious',
'rs-022 - Religious',
'rs-025 - Religious',
'rs-026 - Religious',
'rs-027 - Religious',
'rs-028 - Religious',
'rs-035 - Religious',
'rs-037 - Religious',
'rs-038 - Religious',
'rs-039 - Religious',
'rs-044 - Religious',
'rs-046 - Religious',
'rs-049 - Religious',
'rs-054 - Religious',
'rs-055 - Religious',
'rs-059 - Religious',
'rs-061 - Religious',
'rs-070 - Religious',
'rs-074 - Religious',
'rs-075 - Religious',
'rs-078 - Religious',
//
//RINGS
//
'an-012 - Rings',
'an-013 - Rings',
'an-014 - Rings',
'an-015 - Rings',
'an-016 - Rings',
'an-017 - Rings',
'an-018 - Rings',
'an-019 - Rings',
'an-020 - Rings',
'an-021 - Rings',
'an-022 - Rings',
'an-023 - Rings',
'an-024 - Rings',
'an-025 - Rings',
'an-026 - Rings',
'an-027 - Rings',
'an-028 - Rings',
'an-029 - Rings',
'an-030 - Rings',
'an-031 - Rings',
'an-032 - Rings',
'an-033 - Rings',
'an-034 - Rings',
'an-035 - Rings',
'an-036 - Rings',
'an-037 - Rings',
'an-038 - Rings',
'an-039 - Rings',
'an-040 - Rings',
'an-041 - Rings',
'an-042 - Rings',
'an-043 - Rings',
'an-044 - Rings',
'an-045 - Rings',
'an-046 - Rings',
'an-047 - Rings',
'an-048 - Rings',
'an-049 - Rings',
'an-050 - Rings',
'an-051 - Rings',
'an-052 - Rings',
'an-053 - Rings',
'an-054 - Rings',
'an-055 - Rings',
'an-057 - Rings',
'an-058 - Rings',
'an-059 - Rings',
'an-060 - Rings',
'an-061 - Rings',
'an-062 - Rings',
'an-063 - Rings',
'an-064 - Rings',
'an-065 - Rings',
'an-066 - Rings',
'an-067 - Rings',
'an-068 - Rings',
'an-069 - Rings',
'an-070 - Rings',
'an-071 - Rings',
'an-072 - Rings',
'an-073 - Rings',
'an-074 - Rings',
'an-075 - Rings',
'an-076 - Rings',
'an-077 - Rings',
'an-078 - Rings',
'an-079 - Rings',
'an-080 - Rings',
'an-081 - Rings',
'an-082 - Rings',
'an-083 - Rings',
'an-084 - Rings',
'an-086 - Rings',
'an-088 - Rings',
'an-089 - Rings',
'an-090 - Rings',
'an-091 - Rings',
'an-092 - Rings',
'an-093 - Rings',
'an-094 - Rings',
'an-095 - Rings',
'an-096 - Rings',
'an-097 - Rings',
'an-098 - Rings',
'an-099 - Rings',
'an-100 - Rings',
'an-101 - Rings',
'an-102 - Rings',
'an-103 - Rings',
'an-104 - Rings',
'an-105 - Rings',
'an-106 - Rings',
'an-107 - Rings',
'an-108 - Rings',
'an-109 - Rings',
'an-110 - Rings',
'an-111 - Rings',
'an-112 - Rings',
'an-113 - Rings',
'an-114 - Rings',
'an-115 - Rings',
'an-116 - Rings',
'an-117 - Rings',
'an-118 - Rings',
'an-119 - Rings',
'an-120 - Rings',
'an-121 - Rings',
'an-123 - Rings',
'an-124 - Rings',
'an-125 - Rings',
'an-126 - Rings',
'an-127 - Rings',
'an-128 - Rings',
'an-132 - Rings',
'an-133 - Rings',
'an-134 - Rings',
'an-136 - Rings',
'an-137 - Rings',
'an-138 - Rings',
'an-139 - Rings',
'an-140 - Rings',
'an-141 - Rings',
'an-142 - Rings',
'an-143 - Rings',
'an-144 - Rings',
'an-145 - Rings',
'an-146 - Rings',
'an-147 - Rings',
'an-148 - Rings',
'an-149 - Rings',
'an-150 - Rings',
'an-152 - Rings',
'an-153 - Rings',
'an-154 - Rings',
'an-155 - Rings',
'an-156 - Rings',
'an-159 - Rings',
'an-162 - Rings',
'an-163 - Rings',
'an-169 - Rings',
'an-173 - Rings',
'an-174 - Rings',
'an-177 - Rings',
'an-179 - Rings',
'an-180 - Rings',
'an-181 - Rings',
'an-182 - Rings',
'an-183 - Rings',
'an-184 - Rings',
'an-187 - Rings',
'an-189 - Rings',
'an-191 - Rings',
'an-194 - Rings',
'an-195 - Rings',
'an-196 - Rings',
'an-197 - Rings',
'an-198 - Rings',
'an-200 - Rings',
'an-201 - Rings',
'an-203 - Rings',
'an-231 - Rings',
'an-243 - Rings',
'an-244 - Rings',
'an-245 - Rings',
'an-246 - Rings',
'an-247 - Rings',
'an-432 - Rings',
//
// SET
//
'st-001 - Jewellery Sets',
'st-002 - Jewellery Sets',
'st-003 - Jewellery Sets',
'st-004 - Jewellery Sets',
'st-005 - Jewellery Sets',
'st-006 - Jewellery Sets',
'st-007 - Jewellery Sets',
'st-008 - Jewellery Sets',
'st-009 - Jewellery Sets',
'st-010 - Jewellery Sets',
'st-011 - Jewellery Sets',
'st-012 - Jewellery Sets',
'st-013 - Jewellery Sets',
'st-014 - Jewellery Sets',
'st-015 - Jewellery Sets',
'st-016 - Jewellery Sets',
'st-017 - Jewellery Sets',
'st-018 - Jewellery Sets',
'st-019 - Jewellery Sets',
'st-020 - Jewellery Sets',
'st-021 - Jewellery Sets',
'st-022 - Jewellery Sets',
'st-023 - Jewellery Sets',
'st-024 - Jewellery Sets',
'st-025 - Jewellery Sets',
'st-026 - Jewellery Sets',
'st-027 - Jewellery Sets',
'st-028 - Jewellery Sets',
'st-029 - Jewellery Sets',
'st-030 - Jewellery Sets',
'st-031 - Jewellery Sets',
'st-032 - Jewellery Sets',
'st-033 - Jewellery Sets',
'st-034 - Jewellery Sets',
'st-035 - Jewellery Sets',
'st-036 - Jewellery Sets',
'st-037 - Jewellery Sets',
'st-038 - Jewellery Sets',
'st-039 - Jewellery Sets',
'st-041 - Jewellery Sets',
'st-042 - Jewellery Sets',
'st-045 - Jewellery Sets',
'st-046 - Jewellery Sets',
'st-047 - Jewellery Sets',
'st-049 - Jewellery Sets',
'st-050 - Jewellery Sets',
'st-051 - Jewellery Sets',
'st-052 - Jewellery Sets',
'st-053 - Jewellery Sets',
'st-054 - Jewellery Sets',
'st-055 - Jewellery Sets',
'st-056 - Jewellery Sets',
'st-057 - Jewellery Sets',
'st-058 - Jewellery Sets',
'st-059 - Jewellery Sets',
'st-060 - Jewellery Sets',
'st-061 - Jewellery Sets',
'st-062 - Jewellery Sets',
'st-063 - Jewellery Sets',
'st-060 - Jewellery Sets',
'st-061 - Jewellery Sets',
'st-062 - Jewellery Sets',
'st-063 - Jewellery Sets',
//
//WATCHES
//
'ex-016 - Watches',
'ex-017 - Watches',
'ex-018 - Watches',
'ex-019 - Watches' 
        ]
    });

    $('.btn-search').on('click',function(event){
        event.preventDefault();
        console.log($('input[type="text"]').val());
        var search = $('input[type="text"]').val();
        search = search.split(" - ");
        search[1] = search[1].replace(' ','-');
        window.location = 'products-' + (search[1].toLowerCase()) + '.html' + '?product=' +search[0];
    });

    document.getElementById('links').onclick = function (event) {
        event = event || window.event;
        var target = event.target || event.srcElement,
            link = target.src ? target.parentNode : target,
            options = {index: link, event: event},
            links = this.getElementsByTagName('a');
        blueimp.Gallery(links, options);
    };

    var product = getUrlVars()["product"];
    if(product!==undefined){
        console.log('.item[title='+product+']');
        $('.item[title='+product+']').click();
    }


});

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
    function(m,key,value) {
      vars[key] = value;
    });
    return vars;
  }

/*


data-minchars="1" 
data-maxitems="5" 
data-list="scd - Bracelets, scg - Bracelets, scc - Bracelets, cd - Chain Necklaces, ar - Earrings, bq - Earrings, "


*/