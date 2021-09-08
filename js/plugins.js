
/* global Alpine */
document.addEventListener("alpine:init", () => {
    
    Alpine.magic('genStr', () => (max = 12) => {
        let str = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for(let i = 0; i < max; i++){
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return str;
    });
    
});
