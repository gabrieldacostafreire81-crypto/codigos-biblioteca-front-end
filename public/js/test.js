// Health check script - verifies all resources are loaded correctly
console.log('✅ Test.js loaded');

// Check if core modules are available
if (typeof Auth === 'undefined') {
  console.error('❌ Auth module not loaded');
} else {
  console.log('✅ Auth module loaded');
}

if (typeof DB === 'undefined') {
  console.error('❌ DB module not loaded');
} else {
  console.log('✅ DB module loaded');
}

if (typeof renderLayout === 'undefined') {
  console.error('❌ Layout module not loaded');
} else {
  console.log('✅ Layout module loaded');
}

// Test localStorage
try {
  localStorage.setItem('test', 'ok');
  localStorage.removeItem('test');
  console.log('✅ localStorage available');
} catch (e) {
  console.error('❌ localStorage error:', e.message);
}

console.log('✅ All checks completed!');
