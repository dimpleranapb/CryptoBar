// Function to format numbers to millions with commas
export const formatToMillions = (value) => {
    if (value >= 1_000_000) {
      // Convert to millions and format with commas
      const millions = (value / 1_000_000).toFixed(0); // Remove decimal places
      const formattedMillions = parseInt(millions, 10).toLocaleString(); // Add commas
      return `${formattedMillions}M`;
    } else if (value >= 1_000) {
      // Convert to thousands and format with commas
      const thousands = (value / 1_000).toFixed(0); // Remove decimal places
      const formattedThousands = parseInt(thousands, 10).toLocaleString(); // Add commas
      return `${formattedThousands}K`;
    }
    // Format as plain number with commas
    return ` ${parseInt(value, 10).toLocaleString()}`;
  };
  