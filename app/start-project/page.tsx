// app/start-project/page.tsx
// Start Project route: left column copy from JSON + right column form component.
// Modernized with consistent top padding and glass elements.

import Container from "@/components/layout/Container";
import StartProjectForm from "@/components/forms/StartProjectForm";

import startProject from "@/content/pages/start-project.json";

export default function StartProjectPage() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Container className="pt-64 pb-20 sm:pt-72">
                {/* Page header */}
                <header className="animate-fade-in relative z-10">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter">
                        {startProject.title}
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg text-foreground-secondary leading-relaxed">
                        {startProject.intro}
                    </p>
                    <div className="mt-6 inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                        <span className="text-sm font-medium text-white">{startProject.responseTime}</span>
                    </div>
                </header>

                {/* Two-column layout */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left: guidance */}
                    <aside className="space-y-12 animate-fade-in [animation-delay:200ms]">
                        {/* How it works */}
                        <section>
                            <h2 className="text-2xl font-semibold tracking-tight mb-6">{startProject.leftColumn.howItWorksTitle}</h2>
                            <div className="space-y-4">
                                {startProject.leftColumn.howItWorksSteps.map((s, i) => (
                                    <div key={s.title} className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
                                        <div className="absolute -top-2 -right-1 text-5xl font-serif font-bold text-white/[0.03] group-hover:text-accent/10 transition-colors select-none">
                                            {String(i + 1).padStart(2, '0')}
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <span className="flex-shrink-0 w-8 h-8 rounded-full border border-accent/30 bg-accent/5 flex items-center justify-center text-xs font-semibold text-accent">
                                                {i + 1}
                                            </span>
                                            <div>
                                                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                                                <p className="text-sm text-foreground-secondary leading-relaxed">{s.body}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* What I build */}
                        <section>
                            <h2 className="text-xl font-semibold tracking-tight mb-4">{startProject.leftColumn.whatIBuildTitle}</h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {startProject.leftColumn.whatIBuildBullets.map((b) => (
                                    <li key={b} className="flex gap-3 items-center text-sm text-foreground-secondary">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Budgets */}
                        <section className="glass-card">
                            <h2 className="text-xl font-semibold tracking-tight mb-4">{startProject.leftColumn.budgetTitle}</h2>
                            <ul className="space-y-3 mb-6">
                                {startProject.leftColumn.budgetBullets.map((b) => (
                                    <li key={b} className="flex gap-3 items-center text-sm text-foreground-secondary">
                                        <span className="text-accent">→</span>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-4 border-t border-white/10">
                                <p className="text-sm font-medium text-white/80">{startProject.leftColumn.minimumProject}</p>
                            </div>
                        </section>

                        {/* Timeline */}
                        <section className="opacity-80">
                            <h2 className="text-xl font-semibold tracking-tight mb-4">{startProject.leftColumn.timelineTitle}</h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {startProject.leftColumn.timelineBullets.map((b) => (
                                    <li key={b} className="flex gap-3 items-center text-sm text-foreground-muted">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </aside>

                    {/* Right: form + helper copy */}
                    <div className="space-y-8 animate-fade-in [animation-delay:400ms]">
                        <section className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent">
                            <h2 className="text-lg font-semibold mb-2">{startProject.rightColumn.beforeSubmitTitle}</h2>
                            <p className="text-sm text-foreground-secondary leading-relaxed mb-6">{startProject.rightColumn.beforeSubmitBody}</p>

                            <h3 className="text-sm font-semibold text-white mb-2">{startProject.rightColumn.privacyTitle}</h3>
                            <p className="text-xs text-foreground-muted leading-relaxed">{startProject.rightColumn.privacyBody}</p>
                        </section>

                        <StartProjectForm
                            successHeadline={startProject.successState.headline}
                            successBody={startProject.successState.body}
                        />

                        {startProject.footerNote ? (
                            <p className="text-xs text-center text-white/30">{startProject.footerNote}</p>
                        ) : null}
                    </div>
                </div>
            </Container>
        </main>
    );
}
