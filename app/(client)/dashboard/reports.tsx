"use client"

import React, { useEffect, useState } from 'react';
import { Report } from '~/app/global/types/reports'; // Adjust the path as necessary

interface ReportListProps {
    reports: Report[];
}
