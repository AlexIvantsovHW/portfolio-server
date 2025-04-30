-- CreateTable
CREATE TABLE "contact" (
    "id" SERIAL NOT NULL,
    "whatsApp" TEXT NOT NULL,
    "telegram" TEXT NOT NULL,
    "linkedIn" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cv" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "github" TEXT NOT NULL,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feedbacks" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "description" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "companyTitle" TEXT NOT NULL,
    "logo" TEXT NOT NULL,

    CONSTRAINT "feedbacks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jobs" (
    "id" SERIAL NOT NULL,
    "software_id" INTEGER NOT NULL,
    "endAt" VARCHAR NOT NULL,
    "companyTitle" VARCHAR NOT NULL,
    "startAt" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,
    "jobTitle" VARCHAR NOT NULL,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personal" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "yearExperince" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "personal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "startAt" DATE NOT NULL,
    "endAt" DATE NOT NULL,
    "description" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "logo" TEXT NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "universities" (
    "id" SERIAL NOT NULL,
    "companyTitle" VARCHAR,
    "companyLogo" VARCHAR,
    "startAt" VARCHAR,
    "endAt" VARCHAR,
    "title" VARCHAR,
    "link" VARCHAR,
    "certificate" VARCHAR,
    "description" VARCHAR,

    CONSTRAINT "universities_pkey" PRIMARY KEY ("id")
);
