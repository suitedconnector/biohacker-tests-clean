import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

interface Test {
  id: number;
  title: string;
  category: string;
  priceRange: string;
  description: string;
  whyUse: string;
  keyBiomarkers: string[];
  whereToGet: string[];
  recommendedFor: string;
}

const tests: Test[] = [
  {
    id: 1,
    title: "Comprehensive Metabolic Panel (CMP)",
    category: "Blood Tests",
    priceRange: "$30-$50",
    description:
      "Measures 14 key biomarkers related to metabolic health, kidney function, liver function, and electrolyte balance.",
    whyUse:
      "Provides a snapshot of metabolic health and helps identify issues with blood sugar, kidney or liver function, and electrolyte imbalances. Useful for tracking changes over time.",
    keyBiomarkers: [
      "Glucose (fasting blood sugar)",
      "BUN & Creatinine (kidney function markers)",
      "ALT, AST, ALP (liver enzyme levels)",
      "Sodium, Potassium, Chloride, CO2 (electrolyte balance)",
      "Calcium, Albumin, Total Protein, Bilirubin",
    ],
    whereToGet: [
      "LabCorp - $35-45",
      "Quest Diagnostics - $30-40",
      "Ulta Lab Tests - $28 (direct-to-consumer, no doctor needed)",
    ],
    recommendedFor: "Beginners, baseline health assessment, regular monitoring every 3-6 months",
  },
  {
    id: 2,
    title: "Vitamin D (25-Hydroxy)",
    category: "Nutrition",
    priceRange: "$30-$50",
    description: "Measures 25-hydroxyvitamin D, reflecting your body's vitamin D stores.",
    whyUse:
      "Vitamin D deficiency is common. Testing helps optimize supplementation and sun exposure for energy, immunity, mood, and bone health.",
    keyBiomarkers: ["25-hydroxyvitamin D (total vitamin D level)"],
    whereToGet: [
      "LabCorp - $40-50",
      "Quest Diagnostics - $35-45",
      "EverlyWell Vitamin D Test - $49 (at-home finger prick test)",
      "Ulta Lab Tests - $32",
    ],
    recommendedFor:
      "Everyone, especially those with low energy, depression, frequent illness, or limited sun exposure",
  },
  {
    id: 3,
    title: "Thyroid Panel (Complete)",
    category: "Hormones",
    priceRange: "$100-$150",
    description:
      "Measures TSH, Free T3, Free T4, Reverse T3, and thyroid antibodies (TPO and Thyroglobulin) for complete thyroid health.",
    whyUse:
      "Thyroid regulates metabolism, energy, and hormonal functions. Complete testing identifies subclinical problems and autoimmune effects.",
    keyBiomarkers: [
      "TSH (thyroid stimulating hormone)",
      "Free T3 (active thyroid hormone)",
      "Free T4 (thyroid prohormone)",
      "Reverse T3 (inactive form that can block receptors)",
      "TPO Antibodies (autoimmune marker)",
      "Thyroglobulin Antibodies (autoimmune marker)",
    ],
    whereToGet: [
      "Ulta Lab Tests - $99-129",
      "EverlyWell Thyroid Test - $149",
      "LabCorp - $120-150",
      "Quest Diagnostics - $110-140",
    ],
    recommendedFor:
      "Anyone with unexplained fatigue, weight issues, cold intolerance, hair loss, or family history of thyroid problems",
  },
  {
    id: 4,
    title: "Testosterone (Total & Free)",
    category: "Hormones",
    priceRange: "$50-$80",
    description:
      "Measures total and free testosterone, often including SHBG, to understand biologically active testosterone levels.",
    whyUse:
      "Critical for muscle, energy, libido, cognitive function, and overall vitality. Regular testing helps optimize via lifestyle, sleep, stress, or hormone therapy.",
    keyBiomarkers: ["Total Testosterone", "Free Testosterone", "SHBG (Sex Hormone Binding Globulin)"],
    whereToGet: [
      "LabCorp - $50-70",
      "Quest Diagnostics - $45-65",
      "Ulta Lab Tests - $49",
      "EverlyWell Men's Health Test - $69",
    ],
    recommendedFor:
      "Men over 30, low energy or libido, athletes optimizing performance, women with metabolic or muscle-building goals",
  },
  {
    id: 5,
    title: "HbA1c (Glycated Hemoglobin)",
    category: "Metabolic",
    priceRange: "$30-$40",
    description:
      "Measures average blood sugar over 2-3 months via glucose attached to hemoglobin.",
    whyUse:
      "Reveals long-term glucose control, helps prevent diabetes, and tracks diet and metabolic strategies over time.",
    keyBiomarkers: [
      "HbA1c percentage (optimal: under 5.0%, normal: under 5.7%, prediabetic: 5.7-6.4%, diabetic: 6.5%+)",
    ],
    whereToGet: [
      "LabCorp - $35-40",
      "Quest Diagnostics - $30-38",
      "CVS MinuteClinic - $35",
      "Walgreens - $40",
    ],
    recommendedFor:
      "Everyone concerned with metabolic health, longevity, diabetes prevention, or fat loss",
  },
  {
    id: 6,
    title: "High-Sensitivity C-Reactive Protein (hs-CRP)",
    category: "Blood Tests",
    priceRange: "$40-$60",
    description:
      "Measures low levels of systemic inflammation via C-reactive protein.",
    whyUse:
      "Chronic inflammation drives many diseases. Tracking hs-CRP helps assess cardiovascular and autoimmune risk, and effectiveness of anti-inflammatory strategies.",
    keyBiomarkers: [
      "hs-CRP (optimal: under 1.0 mg/L, average: 1.0-3.0 mg/L, high risk: over 3.0 mg/L)",
    ],
    whereToGet: [
      "LabCorp - $45-55",
      "Quest Diagnostics - $40-50",
      "InsideTracker - $60",
      "Ulta Lab Tests - $42",
    ],
    recommendedFor:
      "Anyone focused on longevity, cardiovascular health, or managing autoimmune/inflammatory conditions",
  },
  {
    id: 7,
    title: "Iron Panel (Complete)",
    category: "Blood Tests",
    priceRange: "$50-$70",
    description:
      "Measures ferritin, serum iron, TIBC, and transferrin saturation for a comprehensive view of iron status.",
    whyUse:
      "Iron is essential for oxygen transport and energy. Both deficiency and excess are harmful; tracking ferritin helps optimize performance and health.",
    keyBiomarkers: [
      "Ferritin (iron storage)",
      "Serum Iron",
      "TIBC (Total Iron Binding Capacity)",
      "Transferrin Saturation",
    ],
    whereToGet: [
      "LabCorp - $55-70",
      "Quest Diagnostics - $50-65",
      "Ulta Lab Tests - $49",
    ],
    recommendedFor:
      "Athletes, menstruating women, anyone with fatigue or low energy, people with family history of hemochromatosis",
  },
  {
    id: 8,
    title: "DUTCH Complete Hormone Test",
    category: "Hormones",
    priceRange: "$400-$500",
    description:
      "Measures sex hormones, cortisol rhythm, metabolites, melatonin, and organic acids via dried urine.",
    whyUse:
      "Gold standard for hormones; shows metabolism, cortisol rhythm, and estrogen breakdown for sleep, stress, and hormonal optimization.",
    keyBiomarkers: [
      "Cortisol rhythm (4-5 points)",
      "Cortisol metabolites",
      "Estrogen, Progesterone, Testosterone",
      "Estrogen metabolites (2-OH, 4-OH, 16-OH)",
      "DHEA",
      "Melatonin",
      "Organic acids",
    ],
    whereToGet: [
      "Precision Analytical - through practitioners",
      "Rupa Health - $399-449",
      "Functional medicine practitioners",
    ],
    recommendedFor:
      "Anyone with hormonal imbalances, sleep issues, chronic stress, adrenal fatigue, or estrogen-related concerns",
  },
  {
    id: 9,
    title: "InsideTracker Ultimate Plan",
    category: "Blood Tests",
    priceRange: "$499",
    description:
      "Analyzes 43 biomarkers including glucose, lipids, hormones, vitamins, minerals, inflammation, and calculates 'InnerAge'.",
    whyUse:
      "Provides actionable, AI-driven recommendations for food, supplements, exercise, and lifestyle to optimize biomarkers and longevity.",
    keyBiomarkers: [
      "Glucose, HbA1c, Insulin",
      "Lipid panel, ApoB",
      "Testosterone, Cortisol",
      "Vitamin D, B12, Folate",
      "Iron markers",
      "Liver and kidney function",
      "Inflammation markers",
      "Plus InnerAge calculation",
    ],
    whereToGet: ["InsideTracker.com - $499 (blood draw at Quest Diagnostics)"],
    recommendedFor: "Data-driven biohackers wanting comprehensive testing with actionable recommendations",
  },
  {
    id: 10,
    title: "23andMe Health + Ancestry",
    category: "Genetic",
    priceRange: "$199",
    description:
      "Analyzes over 700,000 genetic variants from saliva, providing health predispositions, carrier status, traits, and ancestry.",
    whyUse:
      "Genetic insights allow personalized diet, training, and prevention strategies. Only need to test once.",
    keyBiomarkers: [
      "150+ health predisposition reports",
      "Carrier status reports",
      "Wellness and trait reports",
      "Ancestry composition",
      "Downloadable raw genetic data",
    ],
    whereToGet: ["23andMe.com - $199 (at-home saliva kit)"],
    recommendedFor:
      "Anyone interested in genetic health insights, ancestry, or personalized health optimization",
  },
  {
    id: 11,
    title: "Viome Gut Intelligence Test",
    category: "Microbiome",
    priceRange: "$199",
    description:
      "Analyzes gut microbiome via RNA sequencing to understand microbial activity and health impact.",
    whyUse:
      "Provides personalized food and supplement recommendations based on your unique gut microbiome composition for energy, digestion, and inflammation.",
    keyBiomarkers: [
      "Gut microbiome composition",
      "Microbial metabolic activity",
      "Inflammatory activity score",
      "Digestive efficiency score",
      "Personalized food recommendations",
      "Supplement recommendations",
    ],
    whereToGet: ["Viome.com - $199 (at-home stool kit)"],
    recommendedFor:
      "Anyone with digestive issues, inflammatory conditions, or wanting personalized nutrition based on gut health",
  },
  {
    id: 12,
    title: "OmegaQuant Omega-3 Index",
    category: "Nutrition",
    priceRange: "$50-$75",
    description:
      "Measures percentage of EPA and DHA in red blood cells to assess long-term omega-3 status.",
    whyUse:
      "Helps optimize cardiovascular, brain, and inflammatory health by ensuring effective omega-3 intake.",
    keyBiomarkers: [
      "Omega-3 Index (EPA+DHA % in red blood cells)",
      "Individual EPA and DHA levels",
      "Target: 8-12% for optimal health",
    ],
    whereToGet: ["OmegaQuant.com - $49 (at-home finger prick kit)"],
    recommendedFor:
      "Anyone taking fish oil, concerned with cardiovascular/brain health, or managing inflammation",
  },
  {
    id: 13,
    title: "Cortisol (4-Point Saliva Test)",
    category: "Hormones",
    priceRange: "$100-$150",
    description:
      "Measures cortisol at four points in a day to assess stress response and circadian rhythm.",
    whyUse:
      "Reveals abnormal cortisol patterns affecting sleep, fatigue, and training recovery.",
    keyBiomarkers: ["Morning, Noon, Evening, Night cortisol levels", "Cortisol rhythm assessment"],
    whereToGet: [
      "ZRT Laboratory - $119",
      "EverlyWell Sleep & Stress Test - $135",
      "At-home saliva collection",
    ],
    recommendedFor:
      "Anyone with chronic stress, sleep problems, training recovery issues, or burnout symptoms",
  },
  {
    id: 14,
    title: "NutrEval (Genova Diagnostics)",
    category: "Nutrition",
    priceRange: "$400-$500",
    description:
      "Comprehensive nutritional analysis using blood and urine to assess vitamins, minerals, amino acids, fatty acids, oxidative stress, and gut health.",
    whyUse:
      "Identifies nutritional deficiencies and metabolic bottlenecks limiting energy, mood, and performance.",
    keyBiomarkers: [
      "Vitamins (A, B-complex, C, D, E, K)",
      "Minerals (magnesium, zinc, selenium, etc.)",
      "Amino acids",
      "Essential fatty acids",
      "Oxidative stress markers",
      "Organic acids",
      "Digestive markers",
    ],
    whereToGet: [
      "Genova Diagnostics - through functional medicine practitioners",
      "Rupa Health - $449",
    ],
    recommendedFor:
      "Biohackers with unexplained fatigue, cognitive issues, or those wanting comprehensive nutritional optimization",
  },
  {
    id: 15,
    title: "ApoB & Lp(a)",
    category: "Cardiovascular",
    priceRange: "$80-$120",
    description:
      "Measures atherogenic particles (ApoB) and genetic LDL variant Lp(a) for advanced heart disease risk assessment.",
    whyUse:
      "Better predicts heart attack/stroke risk than standard cholesterol tests. High Lp(a) indicates elevated genetic risk.",
    keyBiomarkers: ["ApoB (target: <80 mg/dL)", "Lp(a) (target: <30 mg/dL)"],
    whereToGet: ["Quest Diagnostics - $85-100", "LabCorp - $80-95", "InsideTracker"],
    recommendedFor:
      "Anyone concerned with cardiovascular health, family history of heart disease, or optimizing longevity",
  },
  {
    id: 16,
    title: "IGF-1 (Insulin-like Growth Factor 1)",
    category: "Longevity",
    priceRange: "$60-$80",
    description:
      "Measures IGF-1 reflecting growth hormone activity, impacting muscle growth, tissue repair, and metabolism.",
    whyUse:
      "High or low levels have implications for performance, aging, and cancer risk. Helps guide fasting, diet, and exercise strategies.",
    keyBiomarkers: ["IGF-1 level (100-300 ng/mL)"],
    whereToGet: ["LabCorp - $65-75", "Quest Diagnostics - $60-70", "Ulta Lab Tests - $59"],
    recommendedFor:
      "Those balancing longevity and performance goals, athletes, or practicing fasting/protein restriction",
  },
  {
    id: 17,
    title: "Continuous Glucose Monitor (CGM)",
    category: "Metabolic",
    priceRange: "$200-$400/month",
    description:
      "Wearable sensor that measures interstitial glucose continuously to track responses to food, exercise, sleep, and stress.",
    whyUse:
      "Reveals real-time metabolic responses to optimize diet, exercise, and lifestyle for glucose stability.",
    keyBiomarkers: [
      "Real-time glucose readings",
      "Average glucose",
      "Time in range (70-110 mg/dL)",
      "Glucose variability",
      "Post-meal glucose responses",
    ],
    whereToGet: [
      "Levels Health - $299-399/month",
      "Nutrisense - $225-399/month",
      "Signos - $299-399/month",
      "Veri - $189-329/month",
    ],
    recommendedFor:
      "Anyone optimizing metabolic health, athletic performance, fat loss, or longevity; especially prediabetes or reactive hypoglycemia",
  },
  {
    id: 18,
    title: "Homocysteine",
    category: "Cardiovascular",
    priceRange: "$40-$60",
    description:
      "Amino acid reflecting methylation capacity and cardiovascular/cognitive health.",
    whyUse:
      "High homocysteine damages vessels and accelerates aging. B-vitamin supplementation can correct elevations.",
    keyBiomarkers: [
      "Homocysteine level (optimal <7 µmol/L, normal <15 µmol/L, elevated >15 µmol/L)",
    ],
    whereToGet: ["LabCorp - $45-55", "Quest Diagnostics - $40-50", "Ulta Lab Tests - $39"],
    recommendedFor:
      "Anyone concerned with cardiovascular health, cognitive function, or with MTHFR variants",
  },
  {
    id: 19,
    title: "Thyroid Antibodies Panel",
    category: "Hormones",
    priceRange: "$80-$120",
    description:
      "Measures TPO and thyroglobulin antibodies indicating autoimmune thyroid attack (Hashimoto's or Graves').",
    whyUse:
      "Early detection allows intervention before thyroid damage occurs. Biohackers can manage lifestyle and nutrient strategies to reduce antibody levels.",
    keyBiomarkers: ["TPO Antibodies", "Thyroglobulin Antibodies (normal: negative or <35 IU/mL)"],
    whereToGet: [
      "Ulta Lab Tests - $89",
      "EverlyWell - $99",
      "LabCorp - $90-110",
      "Quest Diagnostics - $85-105",
    ],
    recommendedFor:
      "Anyone with thyroid symptoms, family history, or autoimmune conditions",
  },
  {
    id: 20,
    title: "Lipid Panel (Advanced)",
    category: "Cardiovascular",
    priceRange: "$50-$100",
    description:
      "Advanced lipid panel measuring LDL particle size/number, HDL subfractions, triglycerides, VLDL, and more.",
    whyUse:
      "Detects dangerous LDL particle patterns missed by standard panels, guiding diet, statins, or lifestyle interventions.",
    keyBiomarkers: [
      "LDL particle number (LDL-P)",
      "LDL particle size",
      "Small dense LDL (sdLDL)",
      "HDL-C & HDL subfractions",
      "Triglycerides",
      "VLDL",
    ],
    whereToGet: ["LabCorp - $60-90", "Quest Diagnostics - $55-95", "InsideTracker"],
    recommendedFor:
      "Those concerned with cardiovascular risk, metabolic syndrome, or longevity optimization",
  },
];

export default function UltimateBiohackerTestList() {
  return (
    <div>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-12">
        <div className="max-w-none">
          <h1 className="text-4xl font-bold mb-8">Ultimate Biohacker Test List</h1>
          {tests.map((test) => (
            <article key={test.id} className="mb-12 pb-12 border-b last:border-b-0">
              <h2 className="text-2xl font-semibold mt-8 mb-4">{test.title}</h2>
              <p className="text-sm text-muted-foreground mb-4">
                <strong>Category:</strong> {test.category} | <strong>Price Range:</strong> {test.priceRange}
              </p>
              <p className="mb-4">{test.description}</p>
              <p className="mb-4">
                <strong>Why Use:</strong> {test.whyUse}
              </p>
              <p className="mb-2 font-semibold">
                <strong>Key Biomarkers:</strong>
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                {test.keyBiomarkers.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <p className="mb-2 font-semibold">
                <strong>Where to Get:</strong>
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                {test.whereToGet.map((w, i) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>
              <p className="mb-0">
                <strong>Recommended For:</strong> {test.recommendedFor}
              </p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
