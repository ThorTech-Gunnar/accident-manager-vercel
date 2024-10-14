import PDFDocument from 'pdfkit/lib/pdfkit.standalone';
import blobStream from 'blob-stream';

interface Case {
  id: string;
  title: string;
  description: string;
  status: string;
  createdAt: string;
  assignedTo: string;
  updates: Array<{ id: string; user: string; content: string; createdA