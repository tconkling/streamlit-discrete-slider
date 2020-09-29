import os

import streamlit as st
import streamlit.components.v1 as components

_RELEASE = False

if _RELEASE:
    root_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(root_dir, "frontend/build")

    _discrete_slider = components.declare_component(
        "discrete_slider",
        path=build_dir
    )
else:
    _discrete_slider = components.declare_component(
        "discrete_slider",
        url="http://localhost:3001"
    )


def discrete_slider(options, key=None):
    return _discrete_slider(options=options, key=key, default=options[0])


if not _RELEASE:
    st.title("Component tutorial!")

    selected_value = discrete_slider(["twas", "brillig", "and", "the", "slithey", "toves"])
    st.write(f"You selected: '{selected_value}'")
