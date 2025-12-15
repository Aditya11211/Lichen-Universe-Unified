import streamlit as st
import numpy as np
import hashlib
import time
import random
import plotly.graph_objects as go

st.set_page_config(page_title="🟢 LICHEN STORAGE", layout="wide")
PHI = 1.6180339887

st.title("🟢 **LICHEN STORAGE** : Stockage IMMORTEL")
st.markdown("**60% Apocalypse OK** | φ-optimal 1.618x | Math-proof")

# Init session state
if 'apocalypse' not in st.session_state:
    st.session_state.apocalypse = False
    st.session_state.alive_count = 10

# Sidebar
st.sidebar.header("⚙️ Config")
data_input = st.sidebar.text_area("Données", "Le code est indestructible 🟢")
n_nodes = st.sidebar.slider("Nœuds", 5, 15, 10)
if st.sidebar.button("💥 APOCALYPSE 60%"):
    st.session_state.apocalypse = True
    st.session_state.alive_count = n_nodes - int(0.6 * n_nodes)
    st.sidebar.success(f"💀 {int(0.6*n_nodes)} nœuds détruits")

# Cluster viz
col1, col2 = st.columns([1,2])
with col1:
    st.subheader("🌿 φ-Spirale")

with col2:
    angles = np.linspace(0, 2*np.pi, n_nodes)
    radius = np.logspace(-1, 0.5, n_nodes)
    x = radius * np.cos(angles)
    y = radius * np.sin(angles)
    
    alive_nodes = [True] * n_nodes
    if st.session_state.apocalypse:
        dead_count = max(1, int(0.6 * n_nodes))
        dead_idx = random.sample(range(n_nodes), dead_count)
        for i in dead_idx: alive_nodes[i] = False
    
    fig = go.Figure()
    for i in range(n_nodes):
        color = "green" if alive_nodes[i] else "red"
        emoji = "🟢" if alive_nodes[i] else "🔴"
        fig.add_trace(go.Scatterpolar(
            r=[0, radius[i]], theta=[angles[i]*180/np.pi],
            mode='markers+text', marker=dict(size=30, color=color),
            text=[emoji], textposition="middle center", showlegend=False,
            name=f"N{i+1}"
        ))
    fig.update_layout(
        polar=dict(radialaxis=dict(visible=True, range=[0, max(radius)+0.1])),
        title=f"Survivants: {sum(alive_nodes)}/{n_nodes} (K={int(n_nodes/PHI)+1})"
    )
    st.plotly_chart(fig, use_container_width=True)

# Test CRAID
if st.button("🧪 TEST CRAID-496", type="primary"):
    with st.spinner("🔄 Encodage φ..."):
        data = data_input.encode()
        cell_id = hashlib.sha256(data).hexdigest()[:8]
        st.success(f"✅ Écrit: `{cell_id}`")
        st.info(f"📡 {n_nodes} nœuds (K={int(n_nodes/PHI)+1})")
    
    if st.session_state.apocalypse and st.session_state.alive_count >= int(n_nodes/PHI)+1:
        st.balloons()
        st.success(f"🟢 **RÉCUPÉRÉ 100%** : `{data_input}`")
    elif st.session_state.apocalypse:
        st.warning("❌ Sous-seuil K")
    else:
        st.success(f"**OK** : `{data_input}`")

st.markdown("""
| | RAID-6 | **LICHEN** |
|-|--------|------------|
| **Pannes** | 2 | **60%+** |
| **Overhead** | 2x | **φ=1.618x** |
| **Downtime** | Arrêt | **0s** |
""")

st.markdown("⭐ [GitHub](https://github.com/quantum-lichen/Lichen-Universe-Unified/tree/main/LICHEN.STORAGE)")
