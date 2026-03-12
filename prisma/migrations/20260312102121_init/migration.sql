-- CreateEnum
CREATE TYPE "LeadRole" AS ENUM ('homeowner', 'designer', 'contractor', 'dealer', 'manufacturer', 'investor', 'other');

-- CreateEnum
CREATE TYPE "LeadType" AS ENUM ('waitlist', 'demo');

-- CreateTable
CREATE TABLE "Lead" (
    "id" TEXT NOT NULL,
    "type" "LeadType" NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "fullName" TEXT,
    "email" TEXT NOT NULL,
    "company" TEXT,
    "phone" TEXT,
    "state" TEXT,
    "role" "LeadRole" NOT NULL DEFAULT 'other',
    "primaryUseCase" TEXT,
    "problemDescription" TEXT,
    "currentWorkflow" TEXT,
    "teamSize" TEXT,
    "preferredContactMethod" TEXT,
    "consent" BOOLEAN NOT NULL DEFAULT false,
    "sourcePage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnalyticsEvent" (
    "id" TEXT NOT NULL,
    "eventName" TEXT NOT NULL,
    "sessionId" TEXT,
    "page" TEXT,
    "payload" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnalyticsEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Lead_email_idx" ON "Lead"("email");

-- CreateIndex
CREATE INDEX "Lead_type_idx" ON "Lead"("type");

-- CreateIndex
CREATE INDEX "Lead_role_idx" ON "Lead"("role");

-- CreateIndex
CREATE INDEX "Lead_createdAt_idx" ON "Lead"("createdAt");

-- CreateIndex
CREATE INDEX "AnalyticsEvent_eventName_idx" ON "AnalyticsEvent"("eventName");

-- CreateIndex
CREATE INDEX "AnalyticsEvent_createdAt_idx" ON "AnalyticsEvent"("createdAt");
