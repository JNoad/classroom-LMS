<template>
    <div class="teacher-dashboard">
        <!-- Key Stats Row -->
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-icon">📋</div>
                <div class="stat-content">
                    <p class="stat-label">Attendance Today</p>
                    <p class="stat-value">{{ attendanceRate }}%</p>
                    <p class="stat-detail">
                        {{ presentCount }}/{{ totalStudents }} present
                    </p>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">📊</div>
                <div class="stat-content">
                    <p class="stat-label">Avg Assessment Score</p>
                    <p class="stat-value">{{ avgScore }}%</p>
                    <p class="stat-detail">Last 7 days</p>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">✏️</div>
                <div class="stat-content">
                    <p class="stat-label">Pending Exercises</p>
                    <p class="stat-value">{{ pendingExercises }}</p>
                    <p class="stat-detail">
                        {{ atHomePending }} at-home ·
                        {{ inClassPending }} in-class
                    </p>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">📅</div>
                <div class="stat-content">
                    <p class="stat-label">Upcoming</p>
                    <p class="stat-value">{{ upcomingEventsCount }}</p>
                    <p class="stat-detail">Events & assessments</p>
                </div>
            </div>
        </div>

        <!-- Main Two-Column Section -->
        <div class="dashboard-main">
            <!-- Left: Today's Schedule & Tasks -->
            <div class="schedule-panel">
                <h3>Today's Schedule</h3>
                <ul class="task-list">
                    <li
                        v-for="task in todayTasks"
                        :key="task.id"
                        class="task-item"
                    >
                        <span class="task-time">{{ task.time }}</span>
                        <span class="task-name">{{ task.name }}</span>
                        <button
                            v-if="task.action"
                            class="task-action"
                            @click="task.action.handler"
                        >
                            {{ task.action.label }}
                        </button>
                    </li>
                </ul>

                <h3>Upcoming Assessments</h3>
                <ul class="assessment-list">
                    <li v-for="ass in upcomingAssessments" :key="ass.id">
                        <span class="ass-name">{{ ass.name }}</span>
                        <span class="ass-date">{{ ass.date }}</span>
                    </li>
                </ul>
            </div>

            <!-- Right: Recent Activity & Quick Access -->
            <div class="activity-panel">
                <h3>Recent Student Activity</h3>
                <ul class="activity-feed">
                    <li v-for="act in recentActivity" :key="act.id">
                        <span class="activity-student">{{ act.student }}</span>
                        <span class="activity-desc">{{ act.description }}</span>
                        <span class="activity-time">{{ act.timeAgo }}</span>
                    </li>
                </ul>

                <h3>Teaching Materials</h3>
                <div class="materials-grid">
                    <div
                        class="material-card"
                        v-for="mat in recentMaterials"
                        :key="mat.id"
                    >
                        <div class="material-icon">📘</div>
                        <div class="material-info">
                            <p class="material-title">{{ mat.title }}</p>
                            <p class="material-subject">{{ mat.subject }}</p>
                        </div>
                    </div>
                </div>

                <h3>Quick Projection</h3>
                <div class="quick-exercises">
                    <button
                        v-for="ex in quickExercises"
                        :key="ex.id"
                        class="exercise-btn"
                        @click="projectExercise(ex)"
                    >
                        {{ ex.name }} ({{ ex.type }})
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TeacherDashboard",
    data() {
        return {
            // Mock data – replace with real API calls
            totalStudents: 24,
            presentCount: 22,
            attendanceRate: 92,
            avgScore: 78,
            pendingExercises: 12,
            atHomePending: 7,
            inClassPending: 5,
            upcomingEventsCount: 3,
            todayTasks: [
                { id: 1, time: "09:00", name: "Morning meeting" },
                {
                    id: 2,
                    time: "10:00",
                    name: "Math – Multiplication",
                    action: {
                        label: "Mark Attendance",
                        handler: () => alert("Mark attendance"),
                    },
                },
                { id: 3, time: "11:30", name: "Reading groups" },
                { id: 4, time: "13:00", name: "Science – Plants" },
            ],
            upcomingAssessments: [
                { id: 1, name: "Math Quiz – Times Tables", date: "Mar 25" },
                { id: 2, name: "Spelling Test", date: "Mar 28" },
            ],
            recentActivity: [
                {
                    id: 1,
                    student: "Emma W.",
                    description: 'completed "Addition to 20" at-home',
                    timeAgo: "2h ago",
                },
                {
                    id: 2,
                    student: "Liam K.",
                    description: 'struggling with "Subtraction" in-class',
                    timeAgo: "3h ago",
                },
                {
                    id: 3,
                    student: "Sophia R.",
                    description: "submitted reading response",
                    timeAgo: "yesterday",
                },
            ],
            recentMaterials: [
                { id: 1, title: "Multiplication Flash Cards", subject: "Math" },
                {
                    id: 2,
                    title: "Plant Life Cycle Diagram",
                    subject: "Science",
                },
                {
                    id: 3,
                    title: "Reading Comprehension – Frogs",
                    subject: "English",
                },
            ],
            quickExercises: [
                { id: 1, name: "Skip Counting", type: "in-class" },
                { id: 2, name: "Spelling Quiz", type: "at-home" },
                { id: 3, name: "Addition Bingo", type: "in-class" },
            ],
        };
    },
    methods: {
        projectExercise(exercise) {
            // Logic to open the exercise in projector mode
            alert(`Projecting: ${exercise.name} (${exercise.type})`);
        },
    },
};
</script>

<style lang="scss" scoped>
// Color palette – can be adjusted to school colors
$primary: #4361ee;
$primary-light: #eef2ff;
$success: #2ecc71;
$warning: #f1c40f;
$danger: #e74c3c;
$gray-100: #f8f9fa;
$gray-200: #e9ecef;
$gray-700: #495057;
$border-radius: 1rem;

.teacher-dashboard {
    padding: 2rem;
    background: $gray-100;
    min-height: 100%;
    font-family:
        "Inter",
        system-ui,
        -apple-system,
        sans-serif;
}

// Stats grid
.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.stat-card {
    background: white;
    border-radius: $border-radius;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    box-shadow:
        0 2px 4px rgba(0, 0, 0, 0.02),
        0 1px 2px rgba(0, 0, 0, 0.03);
    transition:
        transform 0.2s,
        box-shadow 0.2s;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    }

    .stat-icon {
        font-size: 2.5rem;
    }

    .stat-content {
        flex: 1;
    }

    .stat-label {
        font-size: 0.875rem;
        color: $gray-700;
        margin: 0 0 0.25rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .stat-value {
        font-size: 1.8rem;
        font-weight: 700;
        margin: 0;
        line-height: 1.2;
        color: #1e293b;
    }

    .stat-detail {
        font-size: 0.75rem;
        color: #6c757d;
        margin: 0.25rem 0 0;
    }
}

// Main two‑column layout
.dashboard-main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
}

// Shared panel styles
.schedule-panel,
.activity-panel {
    background: white;
    border-radius: $border-radius;
    padding: 1.5rem;
    box-shadow:
        0 2px 4px rgba(0, 0, 0, 0.02),
        0 1px 2px rgba(0, 0, 0, 0.03);

    h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin: 0 0 1rem;
        color: #1e293b;
        border-left: 4px solid $primary;
        padding-left: 0.75rem;
    }
}

// Task list
.task-list {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem;
}

.task-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid $gray-200;

    .task-time {
        font-weight: 600;
        color: $primary;
        min-width: 60px;
    }

    .task-name {
        flex: 1;
        color: #1e293b;
    }

    .task-action {
        background: $primary-light;
        border: none;
        padding: 0.25rem 0.75rem;
        border-radius: 2rem;
        font-size: 0.75rem;
        color: $primary;
        cursor: pointer;
        transition: background 0.2s;

        &:hover {
            background: darken($primary-light, 5%);
        }
    }
}

// Assessment list
.assessment-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 0;
        border-bottom: 1px solid $gray-200;

        .ass-name {
            font-weight: 500;
        }

        .ass-date {
            font-size: 0.875rem;
            color: $gray-700;
        }
    }
}

// Activity feed
.activity-feed {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem;

    li {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        gap: 0.5rem;
        padding: 0.75rem 0;
        border-bottom: 1px solid $gray-200;

        .activity-student {
            font-weight: 600;
            color: #1e293b;
        }

        .activity-desc {
            flex: 1;
            color: $gray-700;
        }

        .activity-time {
            font-size: 0.7rem;
            color: #94a3b8;
        }
    }
}

// Materials grid
.materials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 0.75rem;
    margin-bottom: 2rem;
}

.material-card {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    background: $gray-100;
    border-radius: 0.75rem;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background: $gray-200;
    }

    .material-icon {
        font-size: 1.5rem;
    }

    .material-info {
        flex: 1;

        .material-title {
            font-weight: 500;
            margin: 0;
            font-size: 0.875rem;
        }

        .material-subject {
            font-size: 0.75rem;
            color: $gray-700;
            margin: 0;
        }
    }
}

// Quick exercises buttons
.quick-exercises {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.exercise-btn {
    background: $primary-light;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: $primary;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background: darken($primary-light, 5%);
        transform: translateY(-1px);
    }
}
</style>
