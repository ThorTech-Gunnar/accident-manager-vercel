import PDFDocument from 'pdfkit';
import blobStream from 'blob-stream';

interface Case {
  id: string;
  title: string;
  description: string;
  status: string;
  createdAt: string;
  assignedTo: string;
  updates: Array<{ id: string; user: string; content: string; createdAt: string }>;
  files: Array<{ id: string; name: string; type: string; uploadedAt: string; uploadedBy: string }>;
}

export const generateCasePDF = (case_: Case): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const stream = doc.pipe(blobStream());

    // Add content to the PDF
    doc.fontSize(18).text('Case Report', { align: 'center' });
    doc.moveDown();
    doc.fontSize(14).text(`Case ID: ${case_.id}`);
    doc.fontSize(14).text(`Title: ${case_.title}`);
    doc.fontSize(12).text(`Status: ${case_.status}`);
    doc.fontSize(12).text(`Created At: ${new Date(case_.createdAt).toLocaleString()}`);
    doc.fontSize(12).text(`Assigned To: ${case_.assignedTo}`);
    doc.moveDown();
    doc.fontSize(12).text('Description:', { underline: true });
    doc.fontSize(10).text(case_.description);
    doc.moveDown();

    // Add files and evidence section
    doc.fontSize(12).text('Files and Evidence:', { underline: true });
    case_.files.forEach((file) => {
      doc.fontSize(10).text(`${file.name} (${file.type})`);
      doc.fontSize(8).text(`Uploaded by ${file.uploadedBy} on ${new Date(file.uploadedAt).toLocaleString()}`);
      doc.moveDown(0.5);
    });
    doc.moveDown();

    // Add updates section
    doc.fontSize(12).text('Updates:', { underline: true });
    case_.updates.forEach((update) => {
      doc.fontSize(10).text(`${update.user} - ${new Date(update.createdAt).toLocaleString()}`);
      doc.fontSize(10).text(update.content);
      doc.moveDown();
    });

    // Finalize the PDF and create a blob
    doc.end();
    stream.on('finish', () => {
      const blob = stream.toBlob('application/pdf');
      resolve(blob);
    });
    stream.on('error', reject);
  });
};