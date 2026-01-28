"use client";

import { useState } from "react";

interface Problem {
  id: string;
  title: string;
  icon: string;
  description: string;
  warning?: string;
  steps: string[];
  subSolutions?: {
    title: string;
    steps: string[];
  }[];
  note?: string;
  nextSection?: string;
}

const problems: Problem[] = [
  {
    id: "frozen-screen",
    title: "My screen is frozen or the game is on the wrong monitor",
    icon: "🖥️",
    description:
      "It can be confusing when the game shows up on the small wall monitor instead of the main projector screen. This is a common issue with a straightforward fix inside the TrackMan software itself.",
    warning:
      "It is NOT a Windows issue - PLEASE DO NOT CHANGE THE WINDOWS DISPLAY SETTINGS.",
    steps: [
      "Exit your virtual golf round. You can usually do this by moving your mouse over to the wall screen and closing the window. If that doesn't work, press the Windows key on the keyboard to access and close the game windows. As a last resort, you can always restart the computer.",
      "Once you are on the software's home screen, click on the player name in the bottom right corner and select Advanced Settings. (You may need to move your mouse to the wall monitor to do this).",
      "On the Settings screen, select Extended Displays in the upper-right corner.",
      "You will see options for Screen 1 and Screen 2. Ensure the small 'Projector' and 'TPS' squares are checked under Screen 1, not Screen 2.",
      "Save the settings. The system should now correctly display the main game on the projector screen and extended data on the wall monitor.",
    ],
    nextSection: "simulator-wont-connect",
  },
  {
    id: "simulator-wont-connect",
    title: "The simulator won't connect or seems to be missing shot data",
    icon: "📡",
    description:
      "If the TrackMan software can't find the unit or if it's consistently missing data points for your shots, a simple reboot is almost always the solution. There are two ways to do this.",
    steps: [],
    subSolutions: [
      {
        title: "Solution 1: Rebooting the TrackMan Software",
        steps: [
          "Exit the TrackMan software completely.",
          "On the computer's desktop, open the \"TrackMan\" folder and double-click the file named TrackMan Admin. This will open a new window in your web browser.",
          "Click Login.",
          "In the menu on the left, click on Administration and then select Reboot.",
          "Click the Reboot button and confirm your choice.",
          "Once you see a confirmation message that the unit is rebooting, you can close the browser window.",
          "Relaunch the TrackMan software.",
          "To confirm the connection, click the TrackMan logo at the bottom-center of the screen. When the calibration screen appears, click AutoTarget. You should be good to go!",
        ],
      },
      {
        title: 'Solution 2: The "Hard Restart"',
        steps: [
          "Gently pick up the TrackMan unit. Be careful, as it is connected with wires. Do not pull it out too far or disconnect any cables.",
          "On the back of the unit, you'll see a triangular leg. Push the triangular leg down gently until you hear a click, then fold the leg back up.",
          "The small front legs will retract, and the unit will shut down. The unit is fully off when the green light turns off.",
          "To restart the unit, simply begin extending the rear triangular leg down again until you hear it click into place.",
          "Place the unit back in its original position.",
          "The unit has successfully restarted when the green light stops blinking and becomes solid.",
        ],
      },
    ],
    nextSection: "cant-find-tournament",
  },
  {
    id: "cant-find-tournament",
    title: "I can't find the Private Fairway Members Tournament",
    icon: "🏆",
    description:
      "If the members' tournament isn't appearing in your list, there are a few things to check to get it sorted out. Follow this diagnostic checklist.",
    steps: [
      "Check your Windows Login: Make sure you are logged into the computer using the !PFTour user account. The tournaments require this specific login and will not appear if you are logged into a personal Windows account.",
      "Link Your TrackMan Account: On the simulator's home screen, scan the QR code with your TrackMan Golf app to link your account. Alternatively, you can click 'Sign In' in the bottom-left corner and log in with your email and password.",
      "Check Your Tournament Invites: Open your TrackMan Golf App on your phone. Navigate to the \"Tournaments\" section and check both the \"My Tournaments\" and \"Invite\" tabs to ensure you have accepted the official tournament invitation.",
      "Register for the Tournament: If the steps above don't work, you may not be registered yet. You can complete the registration process by visiting the following link: https://www.privatefairway.com/pftour",
    ],
    nextSection: "courses-locked",
  },
  {
    id: "courses-locked",
    title: 'All the courses are locked or I see a "subscription error"',
    icon: "🔒",
    description:
      "This issue almost always means the software has temporarily lost its connection to the TrackMan unit. Re-establishing this connection will unlock the courses and remove the error message.",
    steps: [
      "From the software's home screen, click the TrackMan logo at the bottom of the screen.",
      "A new window will appear and begin searching for the TrackMan unit. (If the search fails or times out, refer to the 'Problem: The simulator won't connect...' section of this guide).",
      "Once the unit connects, the calibration screen will open automatically.",
      "Click the Auto Target button to calibrate the unit. You will see a grid appear on the projector screen.",
      "Return to the course selection screen. After calibration, the lock icons and subscription error should disappear.",
    ],
    nextSection: "handicap-required",
  },
  {
    id: "handicap-required",
    title: "The game won't start because a player needs a handicap",
    icon: "⛳",
    description:
      "TrackMan virtual golf requires every player—including guests who have just created a profile—to have a handicap number assigned before a round can begin. If the \"Start Game\" button is unavailable, check if any player has a dash (-) instead of a number for their handicap.",
    steps: [
      "Click to Edit the Player who is missing a handicap number.",
      "Select the Handicap option.",
      "Assign a Handicap number to the player.",
      "Click Done.",
      "Repeat this process for any other players without a handicap. The \"Start Game\" button should now be available.",
    ],
    note: "If you log in with your personal TrackMan account by scanning the QR code, the system will automatically remember and manage your TrackMan handicap for you in the future.",
    nextSection: "cameras-wont-activate",
  },
  {
    id: "cameras-wont-activate",
    title: "The cameras won't activate or come online",
    icon: "📹",
    description:
      "If the swing cameras don't seem to be working, the best and simplest solution is to reboot the computer.",
    steps: [],
    subSolutions: [
      {
        title: "Restart Option 1: Using Windows",
        steps: [
          "Click the Windows icon in the bottom-left corner of the screen.",
          "Click the power icon, then select Restart.",
          "Once the computer restarts, log in, and the cameras should activate.",
        ],
      },
      {
        title: "Restart Option 2: Using the Power Button",
        steps: [
          "Locate the computer tower (CPU) inside the cabinet.",
          "Find the power button, which is typically on the top of the tower.",
          "Press and hold the power button until the computer turns off.",
          "Press the power button again to restart the computer. The cameras should now come online.",
        ],
      },
    ],
    nextSection: "blank-screen",
  },
  {
    id: "blank-screen",
    title: "The big screen is blank and has no picture",
    icon: "🔌",
    description:
      "If the computer and the small monitor are on but the main projector screen is blank, the most likely reason is that the projector itself has been turned off or has timed out due to inactivity.",
    steps: [
      "Locate the large, white Panasonic remote control on the counter.",
      "Point the remote at the projection screen and press the red power button.",
      "The projector should turn on within a few seconds.",
    ],
  },
];

export default function Home() {
  const [activeProblem, setActiveProblem] = useState<string | null>(null);
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(
    new Set()
  );

  const toggleProblem = (id: string) => {
    setActiveProblem(activeProblem === id ? null : id);
  };

  const toggleStep = (problemId: string, stepIndex: number) => {
    const key = `${problemId}-${stepIndex}`;
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(key)) {
      newCompleted.delete(key);
    } else {
      newCompleted.add(key);
    }
    setCompletedSteps(newCompleted);
  };

  const scrollToProblem = (problemId: string) => {
    const element = document.getElementById(problemId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveProblem(problemId);
    }
  };

  const isStepCompleted = (problemId: string, stepIndex: number) => {
    return completedSteps.has(`${problemId}-${stepIndex}`);
  };

  const getProgress = (problem: Problem) => {
    let totalSteps = problem.steps.length;
    if (problem.subSolutions) {
      problem.subSolutions.forEach((sub) => {
        totalSteps += sub.steps.length;
      });
    }

    let completedCount = 0;
    problem.steps.forEach((_, idx) => {
      if (isStepCompleted(problem.id, idx)) completedCount++;
    });
    if (problem.subSolutions) {
      let offset = problem.steps.length;
      problem.subSolutions.forEach((sub) => {
        sub.steps.forEach((_, idx) => {
          if (isStepCompleted(problem.id, offset + idx)) completedCount++;
        });
        offset += sub.steps.length;
      });
    }

    return totalSteps > 0 ? Math.round((completedCount / totalSteps) * 100) : 0;
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-800 to-emerald-600 text-white py-12 px-4 sm:px-6 lg:px-8 shadow-2xl">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Private Fairway
          </h1>
          <p className="text-xl sm:text-2xl text-emerald-100 font-light">
            Quick Guide to Solving Common Simulator Issues
          </p>
        </div>
      </header>

      {/* Introduction */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-emerald-400 mb-4">
              You&apos;ve Got This!
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Welcome! This guide is designed to empower you to quickly solve
              the most common technical issues you might encounter with our golf
              simulators. We know that technology can sometimes be tricky, but
              don&apos;t worry. Most problems have simple, step-by-step
              solutions that you can perform yourself in just a few minutes.
              Let&apos;s get you back to your game!
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-lg font-semibold text-slate-300 mb-4 text-center">
            Jump to a Problem:
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {problems.map((problem) => (
              <button
                key={problem.id}
                onClick={() => scrollToProblem(problem.id)}
                className="px-4 py-2 bg-slate-700/50 hover:bg-emerald-600/50 text-slate-200 rounded-full text-sm transition-all duration-200 border border-slate-600 hover:border-emerald-500"
              >
                <span className="mr-2">{problem.icon}</span>
                {problem.title.split(":")[0]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Problems List */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {problems.map((problem, index) => (
            <div
              key={problem.id}
              id={problem.id}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-emerald-500/30"
            >
              {/* Problem Header */}
              <button
                onClick={() => toggleProblem(problem.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{problem.icon}</span>
                  <div>
                    <span className="text-emerald-400 text-sm font-medium">
                      Problem {index + 1}
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {problem.title}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {getProgress(problem) > 0 && (
                    <span className="text-sm text-emerald-400">
                      {getProgress(problem)}%
                    </span>
                  )}
                  <svg
                    className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
                      activeProblem === problem.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Problem Content */}
              {activeProblem === problem.id && (
                <div className="px-6 pb-6 animate-fadeIn">
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {problem.description}
                    </p>

                    {problem.warning && (
                      <div className="bg-red-500/10 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
                        <p className="text-red-300 font-medium">
                          <span className="font-bold">CRITICAL WARNING:</span>{" "}
                          {problem.warning}
                        </p>
                      </div>
                    )}

                    {/* Main Steps */}
                    {problem.steps.length > 0 && (
                      <div className="space-y-3 mb-6">
                        <h4 className="text-emerald-400 font-semibold mb-3">
                          Steps to Fix:
                        </h4>
                        {problem.steps.map((step, idx) => (
                          <label
                            key={idx}
                            className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 cursor-pointer transition-colors group"
                          >
                            <input
                              type="checkbox"
                              checked={isStepCompleted(problem.id, idx)}
                              onChange={() => toggleStep(problem.id, idx)}
                              className="mt-1 w-5 h-5 rounded border-slate-500 text-emerald-500 focus:ring-emerald-500 bg-slate-700"
                            />
                            <span
                              className={`text-slate-300 leading-relaxed ${
                                isStepCompleted(problem.id, idx)
                                  ? "line-through text-slate-500"
                                  : ""
                              }`}
                            >
                              <span className="text-emerald-500 font-medium mr-2">
                                {idx + 1}.
                              </span>
                              {step}
                            </span>
                          </label>
                        ))}
                      </div>
                    )}

                    {/* Sub Solutions */}
                    {problem.subSolutions && (
                      <div className="space-y-6">
                        {problem.subSolutions.map((sub, subIdx) => {
                          const offset = problem.steps.length;
                          let stepOffset = offset;
                          for (let i = 0; i < subIdx; i++) {
                            stepOffset +=
                              problem.subSolutions![i].steps.length;
                          }

                          return (
                            <div
                              key={subIdx}
                              className="bg-slate-800/30 rounded-lg p-5 border border-slate-700/50"
                            >
                              <h4 className="text-emerald-400 font-semibold mb-4 text-lg">
                                {sub.title}
                              </h4>
                              <div className="space-y-3">
                                {sub.steps.map((step, idx) => (
                                  <label
                                    key={idx}
                                    className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 cursor-pointer transition-colors"
                                  >
                                    <input
                                      type="checkbox"
                                      checked={isStepCompleted(
                                        problem.id,
                                        stepOffset + idx
                                      )}
                                      onChange={() =>
                                        toggleStep(problem.id, stepOffset + idx)
                                      }
                                      className="mt-1 w-5 h-5 rounded border-slate-500 text-emerald-500 focus:ring-emerald-500 bg-slate-700"
                                    />
                                    <span
                                      className={`text-slate-300 leading-relaxed ${
                                        isStepCompleted(
                                          problem.id,
                                          stepOffset + idx
                                        )
                                          ? "line-through text-slate-500"
                                          : ""
                                      }`}
                                    >
                                      <span className="text-emerald-500 font-medium mr-2">
                                        {idx + 1}.
                                      </span>
                                      {step}
                                    </span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {problem.note && (
                      <div className="mt-6 bg-emerald-500/10 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                        <p className="text-emerald-200">
                          <span className="font-bold">NOTE:</span>{" "}
                          {problem.note}
                        </p>
                      </div>
                    )}

                    {/* Next Section Link */}
                    {problem.nextSection && (
                      <div className="mt-6 text-center">
                        <button
                          onClick={() => scrollToProblem(problem.nextSection!)}
                          className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                          <span>Next: Check related issue</span>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-400 mb-2">
            Need more help? Visit{" "}
            <a
              href="https://www.privatefairway.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              www.PrivateFairway.com
            </a>
          </p>
          <p className="text-slate-500 text-sm">
            Private Fairway Golf Simulator Suites
          </p>
        </div>
      </footer>
    </main>
  );
}
