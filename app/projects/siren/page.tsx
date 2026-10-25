import {
    Callout,
    DataTable,
    FeatureList,
    Figure,
    Paragraph,
    ProcessSteps,
    ProjectBody,
    ProjectCTA,
    ProjectHeader,
    ProjectPage,
    Section,
    StatTiles,
    SubHeading,
    Takeaways,
} from "@/components/projects/ProjectPage"

export const metadata = {
    title: "Siren - Acoustic Classification Viewer | Josh D. Rubio",
    description: "An interpretation layer over a real underwater vessel-noise classifier trained on DeepShip: spectrograms, per-class confidence, frequency bands and an honest model page. A Siegfried satellite, designed and built end to end.",
}

const IMG = "/assets/imgs/projects/siren"

export default function Siren() {
    return (
        <ProjectPage>
            <ProjectHeader
                badge={{ label: "View on GitHub", href: "https://github.com/joshrubio/Siren" }}
                status="Siegfried satellite · 2 of 5"
                title="Siren - Acoustic Classification Viewer"
                summary="Real recordings of ships, a real and imperfect classifier, and an interface that helps an analyst read each prediction: what the model heard, how sure it was, and where it tends to be wrong."
                meta={[
                    { label: "Role", value: "Design & Development" },
                    { label: "Stack", value: "Next.js, Python, scikit-learn" },
                    { label: "Data", value: "DeepShip, 24 recordings" },
                    { label: "Identity", value: "Cyan · IBM Plex" },
                ]}
                hero={{ src: `${IMG}/thumbnail.png`, alt: "Siren" }}
            />

            <ProjectBody>
                <Section title="1. Overview">
                    <Paragraph>
                        <strong>Named for the sirens of myth, known for their song</strong>, Siren is about acoustic signatures: the sound a cargo ship, a tanker, a passenger ferry or a tug makes underwater. It is a satellite of <a href="/projects/siegfried">Siegfried</a>.
                    </Paragraph>
                    <Paragraph>
                        It is deliberately not a machine-learning research project. The model is a small, honest baseline; the work is in the layer on top, which turns a prediction and a confidence score into something a person can check quickly, with its limits on display rather than hidden.
                    </Paragraph>
                </Section>

                <Callout tone="danger" title="⚠️ The Problem">
                    <p className="text-300 mb-0">
                        A classifier&apos;s output is a label and a number. Without the evidence behind it, an analyst cannot tell a confident, correct call from a confident, wrong one, and a single accuracy figure hides that one class may never be recognised at all.
                    </p>
                </Callout>

                <Callout tone="success" title="✓ The Solution">
                    <p className="text-300 mb-0">
                        <strong>Show the evidence next to the verdict.</strong> Every window comes with its spectrogram, a player, confidence for every class and an energy breakdown by frequency band, and a dedicated page reports the real numbers, including the class the model fails on.
                    </p>
                </Callout>

                <ProcessSteps
                    steps={[
                        { label: "LISTEN", hint: "Real audio" },
                        { label: "FEATURES", hint: "Spectrogram, MFCC" },
                        { label: "CLASSIFY", hint: "SVM" },
                        { label: "EXPLAIN", hint: "The interface" },
                    ]}
                />

                <Section title="2. Real Data, Chosen Carefully">
                    <Paragraph>
                        Two public vessel-noise datasets were evaluated. ShipsEar requires requesting access by email, while part of DeepShip, cited in recent papers, can be downloaded directly. Twenty-four recordings were used, six per class, recorded in the Strait of Georgia between 2016 and 2018.
                    </Paragraph>
                </Section>

                <Section title="3. The Pipeline">
                    <Paragraph>
                        One offline Python script does all the machine learning and writes static files. The web app only reads them, so there is no live inference and no database.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/pipeline.png`} alt="Siren pipeline" caption="From DeepShip recordings to the files the app reads" />

                <SubHeading>Evaluation that does not cheat</SubHeading>
                <Paragraph>
                    The split is done per recording, not per window. Windows cut from the same recording share that vessel&apos;s signature, so a random window split would put the same ship on both sides and inflate the score. Random Forest and an SVM with an RBF kernel were compared on the held-out set, and the SVM was kept.
                </Paragraph>
                <Figure src={`${IMG}/split.png`} alt="Window split versus recording split" caption="Why the split happens per recording" />

                <Section title="4. The Explorer">
                    <Paragraph>
                        A master-detail view. The list can be filtered by class, to held-out test windows only, or to misclassified windows only, which is the fastest way to see how the model fails.
                    </Paragraph>
                    <FeatureList
                        items={[
                            { title: "Spectrogram", text: "A mel spectrogram in the magma colormap, the convention of the field, not a decoration." },
                            { title: "Player", text: "The six-second clip, downsampled for the browser while classification used the full rate." },
                            { title: "Confidence", text: "One bar per class, with the ground truth marked." },
                            { title: "Frequency bands", text: "How the window's energy splits into low, mid and high bands." },
                        ]}
                    />
                </Section>
                <Figure src={`${IMG}/screen-explore.webp`} alt="Siren explorer" caption="A window in the explorer: spectrogram, player, confidence and bands" />
                <Figure src={`${IMG}/screen-explore-miss.webp`} alt="Misclassified windows" caption="Filtered to misclassified windows only" />

                <Section title="5. The Model Page">
                    <Paragraph>
                        Real numbers, without rounding the bad ones up: 56.6% accuracy on four classes against 25% by chance, a per-class table and a confusion matrix.
                    </Paragraph>
                    <DataTable
                        head={["Class", "Precision", "Recall", "F1"]}
                        rows={[
                            ["Cargo", "0.70", "0.72", "0.71"],
                            ["Tanker", "0.00", "0.00", "0.00"],
                            ["Passenger", "0.42", "0.63", "0.50"],
                            ["Tug", "1.00", "0.42", "0.59"],
                        ]}
                    />
                    <Paragraph>
                        Tanker is never recognised, and the page explains why: too little variation between vessels in the training data, not a bug. Leaving that row at zero is part of what the project demonstrates.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/screen-model.webp`} alt="Model page" caption="The model page: accuracy, per-class metrics and the confusion matrix" />

                <Section title="6. Identity">
                    <Paragraph>
                        Benchmarked against iZotope RX&apos;s spectral editor and sonar waterfall displays: a near-black background, a cyan accent kept for functional signals such as confidence and active states, IBM Plex Sans and Mono, and a tight instrument-panel radius.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/screen-overview.webp`} alt="Siren overview" caption="The overview page" />

                <Section title="7. Outcome">
                    <StatTiles
                        items={[
                            { value: "24", label: "real recordings" },
                            { value: "858", label: "windows analysed" },
                            { value: "56.6%", label: "test accuracy, 4 classes" },
                            { value: "0", label: "live inference calls" },
                        ]}
                    />
                </Section>

                <Takeaways
                    items={[
                        { title: "Interpretation is a design problem", text: "Putting evidence next to each prediction did more for trust than a better score would have." },
                        { title: "Evaluate like you mean it", text: "Splitting by recording gave a lower number that actually means something." },
                        { title: "Show the weak spot", text: "A zero in the table, explained, is more credible than a dashboard where everything looks fine." },
                    ]}
                    next="Add more recordings per class, starting with tankers, and compare against a small convolutional model on the same split."
                />

                <ProjectCTA
                    links={[
                        { label: "View Source Code", href: "https://github.com/joshrubio/Siren", icon: "ri-github-fill" },
                        { label: "Siegfried Case Study", href: "/projects/siegfried" },
                        { label: "Discuss This Project", href: "/#contact" },
                    ]}
                />
            </ProjectBody>
        </ProjectPage>
    )
}
